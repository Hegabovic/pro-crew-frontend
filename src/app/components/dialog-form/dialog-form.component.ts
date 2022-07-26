import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {DialogFormService} from "../../../services/shared/DialogForm/dialog-form.service";
import {UsersServicesService} from "../../../services/users/users-services.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  editedUser: any = {}

  constructor(private dialogFormService: DialogFormService,
              private userService: UsersServicesService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router : Router,
              private dialogRef: MatDialogRef<DialogFormComponent>
  ) {
  }

  myForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  })


  ngOnInit(): void {
    this.userService.user(this.data.dataKey).subscribe({
      next: (res) => {
        this.myForm.setValue({
          username: res['data'].name,
          email: res['data'].email
        })
      }

    })
  }

  onSubmit() {
    this.editedUser = {
      name: this.myForm.value.username,
      email: this.myForm.value.email
    }

    this.userService.editUser(this.data.dataKey, this.editedUser).subscribe({
      next: (res) => {
        console.log(res)
        this.router.routeReuseStrategy.shouldReuseRoute = () => false
        this.router.onSameUrlNavigation = 'reload'
        this.router.navigate(['/users'])
        this.dialogRef.close()
      }
    })
  }
}
