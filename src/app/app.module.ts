import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material/material.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/modules/auth/interceptors/auth/auth.interceptor';
import { SharedModule } from 'src/modules/shared/shared.module';
import { UsersModule } from 'src/modules/users/users.module';
import { OrderModule } from 'src/modules/order/order.module';
import { AdminModule } from 'src/modules/admin/admin.module';
import { ManagerModule } from 'src/modules/manager/manager.module';


@NgModule({
  declarations: [
   AppComponent
  ],
  entryComponents:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AuthModule,
    ManagerModule,
    OrderModule,
    SharedModule,
    UsersModule
  ],
  exports:[MaterialModule,FormsModule],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
