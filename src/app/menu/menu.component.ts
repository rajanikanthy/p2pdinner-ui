import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { DinnerCategory } from '../DinnerCategory';
import { SpecialNeed } from '../SpecialNeed';
import { DeliveryType } from '../DeliveryType';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Menu = new Menu()
  categories : DinnerCategory[];
  specialNeeds: SpecialNeed[];
  deliveryTypes: DeliveryType[];

  menuItems = [{
    "id": 1,
    "title": "Garden Vegetable",
    "description" : "Vegetarian salad",
    "isActive": true,
    "addressLine1": "5338 Piazza Ct",
    "addressLine2": "",
    "zipCode": "94588",
    "state": "CA",
    "city": "Pleasanton",
    "availableQuantity": 5,
    "costPerItem" : 5.99,
    "categories": "Vegan",
    "deliveries": "Pickup"
    },
    {
      "id": 2,
      "title": "Grilled Chicken on Barbie",
      "description" : "Seasoned and wood-fire grilled chicken breast.",
      "isActive": true,
      "addressLine1": "5338 Piazza Ct",
      "addressLine2": "",
      "zipCode": "94588",
      "state": "CA",
      "city": "Pleasanton",
      "availableQuantity": 5,
      "costPerItem" : 5.99,
      "categories": "Vegan",
      "deliveries": "Pickup"
      },
      {
        "id": 3,
        "title": "Ribeye",
        "description" : "Well-marbled, juicy and savory. Wood-fire grilled with the natural flavor of oak.",
        "isActive": true,
        "addressLine1": "5338 Piazza Ct",
        "addressLine2": "",
        "zipCode": "94588",
        "state": "CA",
        "city": "Pleasanton",
        "availableQuantity": 5,
        "costPerItem" : 5.99,
        "categories": "Vegan",
        "deliveries": "Pickup"
        }
  ]

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((success) => {
        this.menuItems = success;
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
  }

  onAddMenuItem() {
    console.log("Adding menu item " + this.menu.title);
  }
}
