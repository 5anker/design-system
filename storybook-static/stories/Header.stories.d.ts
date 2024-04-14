import { StoryObj } from '@storybook/vue3';

declare const meta: {
    title: string;
    component: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
        user: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<{
                name: string;
            } | null>;
            required: true;
        };
    }, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
        createAccount: () => void;
        login: () => void;
        logout: () => void;
    }, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        user: {
            type: import('../../vue/dist/vue.esm-bundler.js').PropType<{
                name: string;
            } | null>;
            required: true;
        };
    }>> & {
        onCreateAccount?: (() => any) | undefined;
        onLogin?: (() => any) | undefined;
        onLogout?: (() => any) | undefined;
    }, {}, {}>;
    render: (args: any) => {
        components: {
            MyHeader: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<{
                user: {
                    type: import('../../vue/dist/vue.esm-bundler.js').PropType<{
                        name: string;
                    } | null>;
                    required: true;
                };
            }, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
                createAccount: () => void;
                login: () => void;
                logout: () => void;
            }, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
                user: {
                    type: import('../../vue/dist/vue.esm-bundler.js').PropType<{
                        name: string;
                    } | null>;
                    required: true;
                };
            }>> & {
                onCreateAccount?: (() => any) | undefined;
                onLogin?: (() => any) | undefined;
                onLogout?: (() => any) | undefined;
            }, {}, {}>;
        };
        setup(this: void): {
            args: any;
        };
        template: string;
    };
    parameters: {
        layout: string;
    };
    args: {
        onLogin: import('@storybook/test').Mock<[], any>;
        onLogout: import('@storybook/test').Mock<[], any>;
        onCreateAccount: import('@storybook/test').Mock<[], any>;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
