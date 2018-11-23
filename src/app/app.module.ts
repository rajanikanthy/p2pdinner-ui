import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListingsComponent } from './listings/listings.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListingsComponent,
    MyordersComponent,
    PreferencesComponent,
    LoginComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
