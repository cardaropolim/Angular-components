
import type { Meta, StoryObj } from "@storybook/angular";
import {MatInputModule} from '@angular/material/input';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher,} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputComponent } from '../app/input/input.component';

const Meta: Meta<InputComponent> = {
    component: InputComponent,
};

export default {
    title: 'Components/Input',
    imports: [
        FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  ErrorStateMatcher,
  MatFormFieldModule,
  MatInputModule
    ],
    component:InputComponent,
    parameters : {
        layout: 'centered',
         controls: {
           expanded: true ,
    },
    tags: ['autodocs'],
},
} as Meta<InputComponent>;
  

type InputComponentStory = StoryObj<InputComponent>;

export const Primary: InputComponentStory = {
  render: () => ({
    props: {
        label: 'mat_input',
        primary: true,
    }
  })
}
