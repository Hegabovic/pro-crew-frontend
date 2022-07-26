import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UsersServicesService} from "../../../services/users/users-services.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, FormGroupDirective, Validators, FormControl} from '@angular/forms';
import {ErrorStateMatcher} from "@angular/material/core";
import {HttpErrorResponse} from "@angular/common/http";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './adminLogin.component.html',
  styleUrls: ['./adminLogin.component.css'],
})
export class AdminLoginComponent implements OnInit {
  data: any = {}
  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(''),
  });


  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: [false],
    });
  }

  onSubmit() {
    this.data = {
      email: this.myForm.value.email,
      password: this.myForm.value.password,
    }

    this.usersServicesService.login(this.data).subscribe((response) => {
      if (this.myForm.value.rememberme == true) {
        console.log(response)
        localStorage.setItem("username", response.username);
        localStorage.setItem("token", response.token);
        localStorage.setItem("userType", response.role);
        localStorage.setItem("profile_image",'');
        window.location.href = "/dashboard";
      } else {
        sessionStorage.setItem("username", response.username);
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("userType", response.role);
        sessionStorage.setItem("profile_image", '');
        window.location.href = "/dashboard";
      }
    },(response)=>{
      alert(response.error.message)
    })
  }

  onForgetPassword() {
    this.router.navigate(['/forget-password'])
  }

  onCreateAccount() {
    this.router.navigate(['/register'])
  }

  constructor(private fb: FormBuilder,private usersServicesService: UsersServicesService, private router: Router, private formBuilder: FormBuilder) {
  }


}
