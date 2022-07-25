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

const routes: Routes = [
  {
    path: "login",
    component: AdminLoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "",
    component: HomeComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
