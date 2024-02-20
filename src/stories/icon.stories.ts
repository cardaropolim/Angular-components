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
        },
            tags: ['autodocs'],
            argTypes: {
                name: { control: 'text' },
                icon: { control: 'text' },
                onClick: { action: 'clicked' },
            },

            render: (args: { icon: string, name?: string }) => ({
              props: {
                label: 'Home',
                primary: true,
                icon: args.icon,
                nom: args.name,
              },
        }),
},
    
} as Meta<IconComponent>;

 type IconComponentStory = StoryObj<IconComponent>;

 export const Primary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Primary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Home',
                primary: true,
                name: 'Home',
            },
        };
    },
};

export const Secondary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Secondary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Accessibility',
                primary: true,
                name: 'Accessibility',
            },
        };
    },
};

export const Tertiary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Tertiary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'AccountCircle',
                primary: true,
                name: 'Profile Picture',
            },
        };
    },
};

export const Quaternary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Quaternary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Autorenew',
                primary: true,
                name: 'Loading',
            },
        };
    },
};

export const Quinary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Quinary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Explore',
                primary: true,
                name: 'Explore',
            },
        };
    },
};

export const Senary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Senary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Favorite',
                primary: true,
                name: 'Favorite',
            },
        };
    },
};

export const Septenary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Septenary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Payment',
                primary: true,
                name: 'Payment',
            },
        };
    },
};

export const Octonary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Octonary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Question',
                primary: true,
                name: 'Question',
            },
        };
    },
};

export const Nonary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Nonary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Receipt',
                primary: true,
                name: 'Receipt',
            },
        };
    },
};

export const Denary: IconComponentStory = {
    render: (args: { icon: string, name?: string }) => {
        console.log("Denary Story - Icon:", args.icon, "Name:", args.name);

        return {
            props: {
                icon: 'Room',
                primary: true,
                name: 'Postion',
            },
        };
    },
};
