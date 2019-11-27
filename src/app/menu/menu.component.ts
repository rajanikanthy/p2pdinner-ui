import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuItem';
import { MenuService } from '../menu.service';
import { DinnerCategory } from '../DinnerCategory';
import { SpecialNeed } from '../SpecialNeed';
import { DeliveryType } from '../DeliveryType';
import * as moment from 'moment';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem = new MenuItem()
  categories : DinnerCategory[]
  specialNeeds: SpecialNeed[]
  deliveryTypes: DeliveryType[]
  showForm: boolean

  menuItems = []

  constructor(private menuService: MenuService, private profileService: ProfilesService) { }

  ngOnInit() {
    this.showForm = false;
    this.menuService.getMenuItems().subscribe((success) => {
        console.log(success)
        this.menuItems = success
    }, (error) => {
      console.log(error)
    })

    this.menuService.getCategories().subscribe((success) => {
      this.categories = success;
    }, (error) => {
      console.log(error)
    })

    this.menuService.getDeliveryTypes().subscribe((success) => {
      this.deliveryTypes = success;
    }, (error) => {
      console.log(error)
    })

    this.menuService.getSpeicalNeeds().subscribe((success) => {
      this.specialNeeds = success;
    }, (error) => {
      console.log(error)
    })

    this.profileService.getProfileFromCache().subscribe((profile) => {
      this.menuItem.addressLine1 = profile.addressLine1
      this.menuItem.addressLine2 = profile.addressLine2
      this.menuItem.city = profile.city
      this.menuItem.state = profile.state
      this.menuItem.zipCode = profile.zip
    })
  }

  onRemoveMenuItem(id: String, event: Event) {
    console.log("Remove menu item clicked")
    console.log(`Item to be deleted ${id}`)
    this.menuService.deleteMenuItem(id)
      .subscribe(success => {
          console.log("Delete successfully")  
          this.menuService.getMenuItems().subscribe( items => this.menuItems = items) 
      }, error => console.log(error))
    event.stopPropagation()
  }

  onEditMenuItem(id: String, event: Event) {
    console.log("Edit Menu Item clicked")
    this.menuItem = this.menuItems.find( (mi) => mi.id === id)
    this.showForm = true
    event.stopPropagation()
  }

  showAddMenuItemForm() {
    console.log("Clicked on show add menu item form")
    this.showForm = true
  }

  onCancel() {
    console.log("Click on cancel form")
    this.showForm = false
  }

  onAddMenuItem() {
    console.log("Adding menu item " + this.menuItem.title);
    let sm = moment(this.menuItem.startDateStr, "MM/DD/YY")
    let em = moment(this.menuItem.endDateStr, "MM/DD/YY")
    let cm = moment(this.menuItem.closeDateStr, "MM/DD/YY")

    this.menuItem.startDate = sm.unix()
    this.menuItem.endDate = em.unix()
    this.menuItem.closeDate = em.unix()

    this.menuService.createMenuItem(this.menuItem).subscribe( (success) => {
      this.menuService.getMenuItems().subscribe( (s) => {
        this.menuItems = s
        this.showForm = false
      }, (e) => console.log(e))

    }, (error) => {
      console.log(error)
    })
  }
}
