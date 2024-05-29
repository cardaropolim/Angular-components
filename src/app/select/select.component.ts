import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  animations: [
    trigger('transitionMessages', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('void => *', [
        animate('200ms ease-in')
      ]),
      transition('* => void', [
        animate('200ms ease-out')
      ])
    ])
  ],
  standalone: true,
  imports: [
      MatFormFieldModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
  ],
})

export class SelectComponent {
 
   status = new FormControl('');
   statusList: string[] = [
        'All',
        'Open',
        'Assigned',
        'In review',
        'Approved',
        'Overdue',
        'Expired',
        'Extended'
    ];
}