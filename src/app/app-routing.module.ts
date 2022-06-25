import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/modules/admin/components/admin-dashboard/admin-dashboard.component';
import { LoginComponent, RegisterComponent } from 'src/modules/auth/components';
import { ManagerDashboardComponent } from 'src/modules/manager/components/manager-dashboard/manager-dashboard.component';
import { OrderListComponent } from 'src/modules/manager/components/order-list/order-list.component';
import { MenuComponent } from 'src/modules/order/components/menu/menu.component';
import { OrderComponent } from 'src/modules/order/components/order/order.component';
import { AboutComponent } from 'src/modules/shared/components';
import { ContactComponent } from 'src/modules/shared/components/contact/contact.component';
import { FaqComponent } from 'src/modules/shared/components/faq/faq.component';
import { HomeComponent } from 'src/modules/shared/components/home/home.component';
import { PreferencesComponent, ProfileComponent } from 'src/modules/users/components';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about-us', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'preferences', component: PreferencesComponent
  }, 
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'admin', component: AdminDashboardComponent
  },
  {
    path: 'manager', component: ManagerDashboardComponent
  },
  {
    path: 'orders', component: OrderListComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
