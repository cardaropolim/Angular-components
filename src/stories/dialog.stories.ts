import type { Meta, StoryObj } from "@storybook/angular";
import { MatDialog, MatDialogRef, MatDialogActions,
    MatDialogClose, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { DialogComponent } from "../app/dialog/dialog.component";

const Meta: Meta<DialogComponent> = {
    component: DialogComponent,
}

export default {
    title: 'Components/Dialog',
    imports: [
    MatDialog,
    MatDialogRef,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatIconButton,
    ],
    component: DialogComponent,
    parameters : {
        layout: 'centered',
        controls: {
            expanded:true,
            
        },
        tags: ['autodocs'],
        render: (args: DialogComponent) => ({
            props: {
                ...args
        },
    }),

    }

} as Meta<DialogComponent>;

type DialogComponentStory = StoryObj<DialogComponent>

export const Primary: DialogComponentStory = {
 args: {

        },
    
}