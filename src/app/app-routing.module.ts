import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockinClockoutComponent } from './clockin-clockout/clockin-clockout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import {CreateUserComponent} from './users/createUsers/create-user.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "swashbucklers"},
  { path: 'create', component: CreateUserComponent },
  { path: 'swashbucklers', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clock-in-out', component: ClockinClockoutComponent},
  { path: 'swashbucklers/landing-page', component: MainLandingPageComponent},
  { path: 'employees/show', component: EmployeeListComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'createOrderForm', component: OrderFormComponent},
  { path: 'allOrders', component: OrderListComponent},
  { path: 'inventory/manage', component: InventoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
