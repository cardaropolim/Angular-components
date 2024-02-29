import type { Meta, StoryObj } from "@storybook/angular";
import { SelectComponent } from "../app/select/select.component";
import {FormControl, FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const Meta: Meta<SelectComponent> = {
    component: SelectComponent,
};

export default {
    title: 'Components/Select',
    component: SelectComponent,
    imports: [
        FormControl,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
    ],
    ArgTypes: {
        background: { control: 'color' },
        type: { control: 'string' }
    },
    parameters: {
        layout: 'centered',
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,

            },
        },
        tags: ['autodocs'],
        render: (args: SelectComponent) => ({
            props: {
                ...args
        },
    }),

}
} as Meta<SelectComponent>;



type SelectComponentStory = StoryObj<SelectComponent>

export const Primary: SelectComponentStory = {
    render: () => ({
        props: {
          label: 'Button',
          primary: true,
        },
      }),
}