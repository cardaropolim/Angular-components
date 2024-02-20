import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  template: '<div>{{ someVariable }}</div>',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})


export class IconComponent {
  // @Input() label: string | any;
  @Input() primary: boolean = true;
  @Input() name: string | undefined;
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
    // Détermine le mode en fonction de la propriété 'primary'
    const mode = this.primary
        ? 'storybook-icon--primary'
        : 'storybook-icon--secondary';
  
    // Récupère le nom de l'icône correspondant à la propriété 'icon'
    const iconName = this.iconMappings[this.icon] || 'warning';
  
    // Retourne un tableau de classes CSS
    return ['storybook-icon', `storybook-icon--${mode}`, `material-icons`].concat(iconName);
  }
}
