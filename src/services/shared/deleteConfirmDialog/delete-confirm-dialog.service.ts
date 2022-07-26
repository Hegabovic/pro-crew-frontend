import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfirmDialogComponent} from "../../../app/components/delete-confirm-dialog/delete-confirm-dialog.component";
@Injectable({
  providedIn: 'root'
})
export class DeleteConfirmDialogService {

  constructor(private dialog : MatDialog) { }

  openConfirmDialog(msg:any){
    return this.dialog.open(DeleteConfirmDialogComponent,
      {
        width: '390px',
        panelClass:'confirm-dialog-container',
        disableClose: true,
        data:{
          message:msg
        }
      })
  }
}
