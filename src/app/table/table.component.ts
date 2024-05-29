import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit {
 displayedColumns: string[] = ['Name', 'Task_ID', 'Status', 'Budget', 'Location', 'Created_on'];
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator
 }
}

export interface PeriodicElement {
  name: string;
  Task_ID:  string;
  Status: string;
  Budget: number;
  Location: string;
  Created_on: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
{name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
]




// ./table.component.html'