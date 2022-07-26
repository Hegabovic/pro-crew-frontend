import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {MaterialModule} from "../material/material.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./components/register/register.component";
import {AdminLoginComponent} from "./components/login/adminLogin.component";
import {ForgetPasswordComponent} from "./components/forgetPassword/forgetPassword.component";
import {ChangePasswordComponent} from "./components/changePassword/changePassword.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    RegisterComponent,
    AdminLoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
