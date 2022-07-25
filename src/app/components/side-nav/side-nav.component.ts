import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UsersServicesService} from "../../../services/users/users-services.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  username:string = "";
  data: any = {}
  // opened: boolean = false;
  isLoggedIn = false;
  profileOptions: any = ["Admin", "Logout"];
  filteredOptions: any;
  userRole: String = "";
  activeLink = ""
  profilePicture:string="";

  // private authService: AuthService,
  // private usersServicesService: UsersServicesService
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private authService :UsersServicesService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url
      }
    });
  }

  ngOnInit(): void {
    // this.email = localStorage.getItem('name') || sessionStorage.getItem('name') || ''
    this.profilePicture = localStorage.getItem('profile_image') || sessionStorage.getItem('profile_image') || ''

    // this.userRole = localStorage.getItem("roles")?.toString() || sessionStorage.getItem("roles")?.toString() || "";
    this.authService.loggedIn().subscribe((data) => {
      console.log(data)
      this.isLoggedIn = data
    })
  }

  onLogoutCLicked() {
    this.data = {}
    // this.usersServicesService.logout(this.data).subscribe((response) => {
    //   sessionStorage.clear();
    //   localStorage.clear();
    //   window.location.href = "/login"
    // })
  }

}
