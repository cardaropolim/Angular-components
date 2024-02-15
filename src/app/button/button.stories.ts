import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
    title: 'Components/button',
    component:ButtonComponent,
    tags: ['autodocs'],
    render: (args:ButtonComponent) => ({
        props: {
            ...args,
        },
    }),
} as Meta<ButtonComponent>;

type ButtonComponentStory = StoryObj<ButtonComponent>;
export const Primary: ButtonComponentStory = {
    args: {
        text: 'Primary',
    }
};

export const Secondary: ButtonComponentStory = {
    args: {
        text: 'Secondary',
    }
}
