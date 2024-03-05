import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface PeriodicElement {
  name: string;
  position: number;
  Task_ID:  string;
  Status: string;
  Budget: number;
  Location: string;
  Created_on: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 2, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 3, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 4, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 5, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 6, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  {position: 7, name: 'Clean the street', Task_ID: 'DX8VD', Status: 'XX', Budget: 2, Location: 'Science Park', Created_on: '04/03/2024'},
  ]

@Component({
  selector: 'app-checkbox-table',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './checkbox-table.component.html',
  styleUrl: './checkbox-table.component.scss'
})
export class CheckboxTableComponent {
  displayedColumns: string[] = ['select', 'Name', 'Task_ID', 'Status', 'Budget', 'Location', 'Created_on'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

