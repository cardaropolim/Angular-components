import { Meta as MetaComponent, StoryObj } from "@storybook/angular";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from "../app/toolbar/toolbar.component";

const Meta: MetaComponent<ToolbarComponent> = {
    component: ToolbarComponent,
}

export default {
    title: 'Components/Toolbar',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
    ],
    component: ToolbarComponent, 
    parameters: {
        controls: {
            expanded: true,
        },
        tags: ['autodocs'],

    },
} as MetaComponent<ToolbarComponent>;

type ToolbarComponentStory = StoryObj<ToolbarComponent>;
const defaultArgs = { type: 'toolbar' , primary: true }
export const Primary: ToolbarComponentStory = {
        args: {
            ...defaultArgs,
            label: 'lol',
        }
      
}

export const Secondary: ToolbarComponentStory = {
        args: {
            ...defaultArgs,
            label: 'haha',

        }   
}