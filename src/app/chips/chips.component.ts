import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';



@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    MatChipsModule,
  ],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

  @Input() text: string = '{{ text }}';
  @Input() primary: boolean = true;
  @Input() color: string = '{{color}}';
  @Input() dataList: { label: string, value: string }[] = [];


  
  List = [
    { label: 'blocked', value: '<mat-chip-option color="{{color}}">Blocked</mat-chip-option>' },
    { label: 'overdue', value: '<mat-chip-option color="{{color}}">Overdue</mat-chip-option>' },
    { label: 'expired', value: '<mat-chip-option color="{{color}}">Expired</mat-chip-option>' },
    { label: 'updated', value: '<mat-chip-option color="{{color}}">Updated</mat-chip-option>' },
    { label: 'completed', value: '<mat-chip-option color="{{color}}">Completed</mat-chip-option>' },
    { label: 'submitted', value: '<mat-chip-option color="{{color}}">Submitted</mat-chip-option>' },
    { label: 'approved', value: '<mat-chip-option color="{{color}}">Approved</mat-chip-option>' },
    { label: 'active', value: '<mat-chip-option color="{{color}}">Active</mat-chip-option>' },
    { label: 'created', value: '<mat-chip-option color="{{color}}">Created</mat-chip-option>' },
  ];


}

