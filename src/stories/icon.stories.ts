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
            icon: { control: 'text' },
            onClick: { action: 'clicked' },
        },
        
        render: (args: { icon: string}) => ({
            props: {
                label: 'Home',
                icon: args.icon,
            },
        }),
    },
    
} as Meta<IconComponent>;

type IconComponentStory = StoryObj<IconComponent>;
const defaultArgs = { primary: true};

export const Home: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Home',               
            }
        }


export const Accessibility: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Accessibility',               
            }
        }


export const Profile_picture: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'AccountCircle',               
            }
        }


export const Loading: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Autorenew',               
            }
        }


export const Explore: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Explore',               
            }
        }


export const Favorite: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Favorite',               
            }
        }


export const Payment: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Payment',               
            }
        }


export const Question: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Question',               
            }
        }

export const Receipt: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Receipt',               
            }
        }


export const Position: IconComponentStory = {
            args: {
                ...defaultArgs,
                icon: 'Room',
        }
    }
