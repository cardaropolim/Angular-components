import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})





export class IconComponent {
  @Input() primary: boolean = true;
  @Input() color: 'primary' | 'warn' | 'accent' = 'primary' ;
  @Input() size: 'small' | 'medium' | 'large' =  'small';
  @Input() icon:
      | 'Home'
      | 'Accessibility'
      | 'AccountCircle'
      | 'Autorenew'
      | 'Explore'
      | 'Favorite'
      | 'Payment'
      | 'Question'
      | 'Receipt'
      | 'Room' = 'Home';



  public iconMappings: { [key: string]: string } = {
    Home: 'home',
    Accessibility: 'accessibility',
    AccountCircle: 'account_circle',
    Autorenew: 'autorenew',
    Explore: 'explore',
    Favorite: 'favorite',
    Payment: 'payment',
    Question: 'question_answer',
    Receipt: 'receipt',
    Room: 'room',
  };

  public get iconClass(): string[] {
    // Détermine le mode en fonction de la propriété 'primary'op^
    const mode = this.primary
        ? 'storybook-icon--primary'
        : 'storybook-icon--secondary';
  
  
    // Retourne un tableau de classes CSS
    return ['storybook-icon', `storybook-icon--${mode}`, `material-icons`];
  }
}
