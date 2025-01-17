import { type Meta, type StoryObj } from "@storybook/angular";
import { ButtonComponent } from "../app/button/button.component";

const Meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default {
  title: 'Components/Button',
  component: ButtonComponent,
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
    render: (args: ButtonComponent) => ({
      props: {
        ...args,
      },
    }),
  },
} as Meta<ButtonComponent>;

const defaultArgs = { primary: true };
type ButtonComponentStory = StoryObj<ButtonComponent>;

export const Primary: ButtonComponentStory = {
  args: {
    ...defaultArgs,
    text: 'payment',
    color: 'primary',
    text2: 'Payment'
    
  }
};

export const Secondary: ButtonComponentStory = {
  args: {
    ...defaultArgs,
    text: 'favorite',
     color: "accent",
     text2: 'Favorite',
  
  }
};

export const Tertiary: ButtonComponentStory = {
  args: {
    ...defaultArgs,
    text: 'clear-all',
    color: "warn",
    text2: 'Clear'
    
  }
};

export const Quaternary: ButtonComponentStory = {
  args: {
    ...defaultArgs,
    text: 'room',
    text2: 'Position'
  }
};