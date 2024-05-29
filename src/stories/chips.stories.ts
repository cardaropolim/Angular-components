import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import { ChipsComponent } from "../app/chips/chips.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatNativeDateModule } from "@angular/material/core";
import { MatChipsModule } from "@angular/material/chips";


const Meta: Meta<ChipsComponent> = {
    component: ChipsComponent,
};

export default { 
    title: 'Components/Chips',
    component: ChipsComponent,
    decorators: [
        moduleMetadata({
            imports: [     
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatChipsModule,
    ],
})
    ],
    ArgTypes: {
        background: { control: 'color' },
        type: { control: 'string' },
        color: { control: { type: 'color', presetColors: ['primary', 'accent', 'warn']} },
        dataList: { control: 'array' },
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
        render: (args: ChipsComponent) => ({
            props: {
                ...args,
                List: [
                    { label: 'blocked', value: '<mat-chip-option color="{{color}}">Blocked</mat-chip-option>' },
                    { label: 'overdue', value: '<mat-chip-option color="{{color}}">Overdue</mat-chip-option>' },
                    { label: 'expired', value: '<mat-chip-option color="{{color}}">Expired</mat-chip-option>' },
                    { label: 'updated', value: '<mat-chip-option color="{{color}}">Updated</mat-chip-option>' },
                    { label: 'completed', value: '<mat-chip-option color="{{color}}">Completed</mat-chip-option>' },
                    { label: 'submitted', value: '<mat-chip-option color="{{color}}">Submitted</mat-chip-option>' },
                    { label: 'approved', value: '<mat-chip-option color="{{color}}">Approved</mat-chip-option>' },
                    { label: 'active', value: '<mat-chip-option color="{{color}}">Active</mat-chip-option>' },
                    { label: 'created', value: '<mat-chip-option color="{{color}}">Created</mat-chip-option>' },
                ]
        },
    }),
}
} as Meta<ChipsComponent>

const defaultArgs = { primary: true };
type ChipsComponentStory = StoryObj<ChipsComponent>

export const Primary: ChipsComponentStory = {
    args: {
        ...defaultArgs,
        color:'primary',

    },
}

export const Accent: ChipsComponentStory = {
    args: {
        ...defaultArgs,
        color:'accent',

    },
}

export const Warn: ChipsComponentStory = {
    args: {
        ...defaultArgs,
        color:'warn',

    },
}