import { Component, Input, NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

 @Component({
   selector: 'app-icon',
   standalone: true,
   imports: [
     CommonModule,
     MatIconModule,
   ],
   templateUrl: './icon.component.html',
   styleUrl: './icon.component.scss'
 })



export class IconComponent {

@Input() primary: boolean = true;
@Input() name: string|any;

}


