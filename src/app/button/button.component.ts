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

@Input() text: string = '{{ text }}';
@Input() primary: boolean = true;
@Input() buttonType: 'Primary' | 'Secondary' | 'Tertiary' | 'Quaternary' | 'Quinary' | 'Senary' | 'Septenary' | 'Octonary' | 'Nonary' | 'Denary' = 'Primary';
// @Input() backgroundColor: 

public get buttonClass(): string [] {
  const mode = this.primary 
  ? 'storybook-button--primary'
  : this.buttonType == 'Secondary'
  ? 'storybook-button--secondary'
  : this.buttonType == 'Tertiary'
  ? 'storybook-button--tertiary'
  : this.buttonType == 'Quaternary'
  ? 'storybook-button--quaternary'
  : this.buttonType == 'Quinary'
  ? 'storybook-button--quinary'
  : this.buttonType === 'Senary'
  ? 'storybook-button--senary'
  : this.buttonType === 'Septenary'
  ? 'storybook-button--septenary'
  : this.buttonType === 'Octonary'
  ? 'storybook-button--octonary'
  : this.buttonType === 'Nonary'
  ? 'storybook-button--nonary'
  : 'storybook-button--denary';
    return ['storybook-button', `storybook-button--${this.buttonType}`, mode];
}
}
