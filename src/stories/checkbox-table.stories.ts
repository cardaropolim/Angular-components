import type { Meta, StoryObj } from "@storybook/angular";
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxTableComponent } from "../app/checkbox-table/checkbox-table.component";

const Meta: Meta<CheckboxTableComponent> = {
    component: CheckboxTableComponent,
}

export default {
    title:'Components/Checkbox-Table',
    imports: [
      MatTableDataSource,
      MatTableModule,
      SelectionModel,
      MatCheckboxModule,
      
    ],
    component: CheckboxTableComponent, 
    parameters : {
        layout : 'centered',
        controls: {
            expanded: true,
        },
        tags: ['autodocs'],
        render: (args: CheckboxTableComponent) => ({
            props: {
                ...args
                }
         }),
    }
    } as Meta<CheckboxTableComponent>;

    type CheckboxTableComponentStory = StoryObj<CheckboxTableComponent>

    export const Primary: CheckboxTableComponentStory = {
    args: {
  
    },
}

        