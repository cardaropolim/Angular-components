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

}

