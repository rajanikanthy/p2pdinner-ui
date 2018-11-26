import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ListingsComponent } from './listings/listings.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'listings', component: ListingsComponent},
  { path: 'orders', component: MyordersComponent},
  { path: 'preferences', component: PreferencesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
