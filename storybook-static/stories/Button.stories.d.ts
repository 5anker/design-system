import { StoryObj } from '@storybook/vue3';

declare const meta: {
    title: string;
    component: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        label: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        primary: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        };
        backgroundColor: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        click: (id: number) => void;
    }, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        label: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<string>;
            required: true;
        };
        primary: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        };
        backgroundColor: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<string>;
        };
    }>> & {
        onClick?: ((id: number) => any) | undefined;
    }, {
        primary: boolean;
    }, {}>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        backgroundColor: {
            control: string;
        };
    };
    args: {
        primary: false;
        onClick: import('@storybook/test').Mock<[id: number], any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
