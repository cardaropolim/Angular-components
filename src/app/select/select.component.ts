import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface statusList {
  value: string;
  viewValue: string;
}

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
    CommonModule
  ],
})

export class SelectComponent {
 
  statusList: statusList[] = [
   {value: '1', viewValue: 'All' }, 
   {value: '2', viewValue: 'Open' },  
   {value: '3', viewValue: 'Assigned' },   
   {value: '4', viewValue: 'In review' },   
   {value: '5', viewValue: 'Approved' },     
   {value: '6', viewValue: 'Overdue' },     
   {value: '7', viewValue: 'Expired' },      
   {value: '8', viewValue: 'Extended' },      
    ];

    form: FormGroup = new FormGroup ({});

    constructor(private  fb: FormBuilder) {

       this.form = fb.group({
         statusList: ['', [Validators.required]],
       })
    }

     get f() {
       return this.form.controls;
     }
     submit() {
       console.log(this.form.value)
     }



}