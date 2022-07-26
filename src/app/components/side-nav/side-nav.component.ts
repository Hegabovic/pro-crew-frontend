import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UsersServicesService} from "../../../services/users/users-services.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  token = {
    token:localStorage.getItem('token') ||sessionStorage.getItem('token') || ""
  }
  username:string ='';
  data: any = {}
  isLoggedIn = false;
  filteredOptions: any;
  userRole: String = "";
  activeLink = ""
  profilePicture:string="";

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private usersServicesService :UsersServicesService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url
      }
    });
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || sessionStorage.getItem('username') || ''
    this.profilePicture = localStorage.getItem('profile_image') || sessionStorage.getItem('profile_image') || ''
    this.userRole = localStorage.getItem("userType")?.toString() || sessionStorage.getItem("userType")?.toString() || "";

    this.usersServicesService.loggedIn().subscribe((data) => {
      console.log(data)
      this.isLoggedIn = data
    })
  }

  onLogoutCLicked() {
    this.data = localStorage.getItem('token') ||sessionStorage.getItem('token') || ""
    this.usersServicesService.logout(this.data).subscribe((response) => {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/login"
    })
  }
}
