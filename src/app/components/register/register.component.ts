import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersServicesService} from "../../../services/users/users-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any = {};
  message:string = ""
  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),

  });


  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    this.data = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      password_confirmation: this.myForm.value.confirmPassword,
    }
    if (this.myForm.value.password === this.myForm.value.confirmPassword) {
      this.usersServicesService.register(this.data).subscribe((response) => {
        console.log(this.myForm.value.name)
        console.log(this.myForm.value.email)
        console.log(this.myForm.value.password)
        console.log(this.myForm.value.confirmPassword)
        window.location.href='/login'
      }, )
    }
  }


  constructor(private fb: FormBuilder, private usersServicesService: UsersServicesService, private router: Router, private formBuilder: FormBuilder) {
  }

}
