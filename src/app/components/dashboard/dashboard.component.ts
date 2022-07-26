import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsersServicesService} from "../../../services/users/users-services.service";
import {DeleteConfirmDialogService} from "../../../services/shared/deleteConfirmDialog/delete-confirm-dialog.service";
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {DialogFormComponent} from "../dialog-form/dialog-form.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  patients: any = [];
  dataSource !: MatTableDataSource<any>;
  @ViewChild('paginator') paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  x:MatTableDataSource<any>= this.dataSource
  constructor(private usersServicesService: UsersServicesService, private dialogService: DeleteConfirmDialogService, private dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.usersServicesService.users().subscribe((response) => {
      console.log(response)
      this.dataSource = new MatTableDataSource<any>(response.data);
      this.dataSource.paginator = this.paginator;
    });
  }



  displayedColumns: string[] = ["name", "email", "role", "Actions"]



  filterDate($event: any) {
    this.dataSource.filter = $event.target.value.trim().toLowerCase();
  }


  onDelete(element:any) {
    this.dialogService.openConfirmDialog('Are you sure you want to delete this record ?').afterClosed().subscribe(res => {
      if (res ==='true') {
        this.usersServicesService.delete(element.id).subscribe({next:(res)=>{
            if (res.success) {
              const index = this.dataSource.data.indexOf(element.id);
              this.dataSource.data.splice(index, 1);
              this.dataSource._updateChangeSubscription();
            }
          }})
      }
    });
  }


  onEdit(element:any) {
    this.dialog.open(DialogFormComponent,{
      data:{
        dataKey : element.id
      }
    })



  }
}









