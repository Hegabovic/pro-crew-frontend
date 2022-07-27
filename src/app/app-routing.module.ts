import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {SideNavComponent} from "./components/side-nav/side-nav.component";
import {AdminLoginComponent} from "./components/login/adminLogin.component";
import {RegisterComponent} from "./components/register/register.component";
import {ForgetPasswordComponent} from "./components/forgetPassword/forgetPassword.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./auth.guard";
import {ChangePasswordComponent} from "./components/changePassword/changePassword.component";
import {CheckMailComponent} from "./components/check-mail/check-mail.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: AdminLoginComponent,
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: "check-your-mail",
    component: CheckMailComponent
  },
  {
    path: "confirm-password-change",
    component: ChangePasswordComponent
  },
  {
    path: "",
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "users",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "sidenav",
    component: SideNavComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule {

}
