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
};

export const Tertiary: ButtonComponentStory = {
    args: {
        text: 'Tertiary',
    }
};

export const Quaternary: ButtonComponentStory = {
    args: {
        text: 'Quaternary',
    }
};

export const Quinary: ButtonComponentStory = {
    args: {
        text: 'Quinary',
    }
};

export const Senary: ButtonComponentStory = {
    args: {
        text: 'Senary',
    }
};

export const Septenary: ButtonComponentStory = {
    args: {
        text: 'Septenary',
    }
};

export const Octonary: ButtonComponentStory = {
    args: {
        text: 'Octonary',
    }
};

export const Nonary: ButtonComponentStory = {
    args: {
        text: 'Nonary',
    }
};

export const Denary: ButtonComponentStory = {
    args: {
        text: 'Denary',
    }
};
