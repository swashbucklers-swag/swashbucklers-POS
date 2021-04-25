//Default imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//These import is for routing
import { AppRoutingModule } from './app-routing.module';

//Imported by angular material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//The name of our default/main component that we will work on
import { AppComponent } from './app.component';

//Other components that we create
import {CreateUserComponent} from './users/createUsers/create-user.component';
import {HeaderComponent} from './header/header.component';

//Custom imports
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component'
import { EmployeeService } from './services/employee.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClockinClockoutComponent } from './clockin-clockout/clockin-clockout.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { EmployeesComponent } from './employees/employees.component';
import { LocationComponent } from './location/location.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerComponent } from './customers/customer/customer.component';


@NgModule({
  declarations: [
    //here we are going to declare all our components
    AppComponent,
    HeaderComponent,
    CreateUserComponent,
    InventoryComponent,
    LoginComponent,
    DashboardComponent,
    ClockinClockoutComponent,
    MainLandingPageComponent,
    EmployeesComponent,
    LocationComponent,
    EmployeeListComponent,
    OrdersComponent,
    OrderFormComponent,
    OrderListComponent,
    AddInventoryComponent,
    InventoryItemComponent,
    AddCustomerComponent,
    CustomerComponent
  ],
  //you have to import and export here so angular knows you want to use it
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  //It doesnt come with this section, but it doesnt work without it either ¯\_(ツ)_/¯
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    CreateUserComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
