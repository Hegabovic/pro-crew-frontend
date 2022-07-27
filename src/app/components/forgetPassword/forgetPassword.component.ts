import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../../services/ForgetPasswordCycle/reset-password.service";


@Component({
  selector: 'app-forgetPassword',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  data: any = {}
  messageAlert:string=''
  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private router: Router, private fb: FormBuilder, private resetPasswordService: ResetPasswordService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],

    });
  }

  onSubmit() {
    this.data = {
      email: this.myForm.value.email,
    }

    this.resetPasswordService.resetPassword(this.data).subscribe((response) => {
      if (response.status){
        this.router.navigate(['/check-your-mail'])
      }else{
        this.messageAlert = '*Please Enter A Valid E-Mail'
      }
    })
  }
}
