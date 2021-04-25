import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockinClockoutComponent } from './clockin-clockout/clockin-clockout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import {CreateUserComponent} from './users/createUsers/create-user.component';
import {CustomersComponent} from './customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "swashbucklers"},
  { path: 'create', component: CreateUserComponent },
  { path: 'swashbucklers', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clock-in-out', component: ClockinClockoutComponent},
  { path: 'swashbucklers/landing-page', component: MainLandingPageComponent},
  { path: 'employees', component: EmployeesComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'createOrderForm', component: OrderFormComponent},
  { path: 'allOrders', component: OrderListComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'customers/add', component: AddCustomerComponent},
  { path: 'inventory/manage', component: InventoryComponent},
  { path: 'timesheets', component: ClockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
