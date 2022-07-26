import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {MaterialModule} from "../material/material.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegisterComponent} from "./components/register/register.component";
import {AdminLoginComponent} from "./components/login/adminLogin.component";
import {ForgetPasswordComponent} from "./components/forgetPassword/forgetPassword.component";
import {ChangePasswordComponent} from "./components/changePassword/changePassword.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {MatTableModule} from "@angular/material/table";
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import {MatDialog} from "@angular/material/dialog";
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import {AuthInterceptor} from "../interceptors/auth-interceptor";

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
    DeleteConfirmDialogComponent,
    DialogFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,

  ],
  providers: [
    DialogFormComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents:[DashboardComponent,DeleteConfirmDialogComponent]
})
export class AppModule { }
