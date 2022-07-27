import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.css']
})
export class CheckMailComponent implements OnInit {


  constructor(private router: Router) {}



  ngOnInit(): void {
  }

  onNotReceive() {
    this.router.navigate(['/forget-password'])
  }

}


