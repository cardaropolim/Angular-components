import { moduleMetadata, type Meta, type StoryObj } from "@storybook/angular";
import { SelectComponent } from "../app/select/select.component";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const Meta: Meta<SelectComponent> = {
    component: SelectComponent,
};   

export default {
    title: 'Components/Select',
    component: SelectComponent,
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
    ],
})
    ],
    parameters: {
        layout: 'centered',
        controls: {
            expanded: true ,
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

}
