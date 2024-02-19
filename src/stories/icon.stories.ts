import type { Meta, StoryObj} from "@storybook/angular";
import { IconComponent } from "../app/icon/icon.component";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

const Meta: Meta<IconComponent> = {
    component: IconComponent,
};

export default {
    title: 'Components/Icon',
    imports : [
        MatIconModule,
        MatIconRegistry,
    ],
    component:IconComponent,
    parameters : {
        layout: 'centered',
        controls: {
            expanded: true ,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    tags: ['autodocs'],
    render: (args:IconComponent) => ({
        props: {
            ...args,
        },
    }),
} as Meta<IconComponent>;

type IconComponentStory = StoryObj<IconComponent>;
export const Primary: IconComponentStory = {
    args: { 
    }
}