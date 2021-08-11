import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerI } from '../../models/customers-interface';
import { CustomerService } from '../../services/customer.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
 
  displayedColumns: string[] = ['name', 'city', 'order', 'actions', 'new'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  
 ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(
  private customerService: CustomerService,
private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  this.customerService.getAllCustomers().subscribe(res => this.dataSource.data = res);


  }
  

  applyFilter(filterValue: string){
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    onEdit(element) {
    this.resetForm();
    this.openModal();
    if(element){
    this.customerService.selected = element;
    }
   
  }
    onDelete(id: string) {
    this.customerService.deleteCustomer(id);
    }

    openModal():void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
    title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(FormComponent, dialogConfig);
    }


    resetForm():void{
    this.customerService.selected.name = '',
    this.customerService.selected.city = '',
    this.customerService.selected.Order = '',
    this.customerService.selected.id = null

    }
}
