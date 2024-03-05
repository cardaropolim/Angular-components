import type { Meta, StoryObj } from "@storybook/angular";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeComponent } from "../app/badge/badge.component";

const Meta: Meta<BadgeComponent> = {
component: BadgeComponent,
}

export default {
    title: 'Components/Badge',
    imports: [
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
    ],
    component: BadgeComponent,
    parameters : {
        layout : 'centered',
        controls: {
            expanded: true,
        },
        tags: ['autodocs'],
        render: (args: BadgeComponent) => ({
            props: {
                ...args
              }
         }),
    }
} as Meta<BadgeComponent>;

type BadgeComponentStory = StoryObj<BadgeComponent>

export const Primary: BadgeComponentStory = {
    args: {
        
    }
}


