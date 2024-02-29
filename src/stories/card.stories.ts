import type { Meta, StoryObj } from "@storybook/angular";
import { CardComponent } from "../app/card/card.component";


const Meta: Meta<CardComponent> = {
    component: CardComponent,
}

export default {
    title: 'Components/card',
    component: CardComponent,
    ArgTypes: {
        background: { control: 'color' },
        type: { control: 'string' },
        color: { control: { type: 'color', presetColors: ['primary', 'accent', 'warn']} }
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
        render: (args: CardComponent) => ({
            props: {
                ...args
        },
    }),
}
} as Meta<CardComponent>;
const defaultArgs = { primary: true };
type CardComponentStory = StoryObj<CardComponent>;

export const Primary: CardComponentStory = {
    args: {
        ...defaultArgs,

    },
}