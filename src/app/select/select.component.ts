import { Component, NgModule} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})

export class SelectComponent {
  Status = new FormControl('');
  Statuslist: string[] = ['All', 'Open', 'Assigned', 'In review', 'Approved', 'Overdue', 'Expired', 'Extended'];
}
