import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UsersServicesService} from "../../../services/users/users-services.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patients: any = [];
  dataSource !: MatTableDataSource<any>;
  @ViewChild('paginator') paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private usersServicesService: UsersServicesService) {
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



}









