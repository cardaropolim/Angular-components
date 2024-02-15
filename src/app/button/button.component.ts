import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

@Input() text: string = '';
@Input() primary: boolean = true;
@Input() buttonType: 'primary' | 'secondary' = 'primary'

public get buttonClass(): string [] {
  const mode = this.primary 
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
    return ['storybook-button', `storybook-button--${this.buttonType}`, mode];
}
}
