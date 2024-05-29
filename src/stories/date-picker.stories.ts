import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  provideNativeDateAdapter,
  MatNativeDateModule,
} from '@angular/material/core';
import { DatePickerComponent } from '../app/date-picker/date-picker.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const Meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
};

export default {
  title: 'Components/Date picker',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
    }),
  ],
  component: DatePickerComponent,
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
    tags: ['autodocs'],
    render: (args: DatePickerComponent) => ({
      props: {
        ...args,
      },
    }),
  },
} as Meta<DatePickerComponent>;

type DatePickerComponentStory = StoryObj<DatePickerComponent>;

export const Primary: DatePickerComponentStory = {
  args: {},
};
