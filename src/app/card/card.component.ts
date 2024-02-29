import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}

export class CardOverviewExample {
  // centres = [
  //   {
  //     img: 'src/assets/images/C.jpg',
  //   }
  // ]
}
