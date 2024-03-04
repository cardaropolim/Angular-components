import { Component, NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  emailFormControl!: FormControl<any>;
  constructor(input: InputComponent) { 
    this.emailFormControl = input.emailFormControl; 
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
