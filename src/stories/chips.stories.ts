import type { Meta, StoryObj } from "@storybook/angular";
import { ChipsComponent } from "../app/chips/chips.component";

const Meta: Meta<ChipsComponent> = {
    component: ChipsComponent,
};

export default { 
    title: 'Components/chips',
    component: ChipsComponent,
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
        render: (args: ChipsComponent) => ({
            props: {
                ...args
        },
    }),
}
} as Meta<ChipsComponent>;

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