
declare const _default: import('../../vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean | undefined;
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * background color of the button
     */
    backgroundColor?: string | undefined;
}>, {
    primary: boolean;
}>, {}, unknown, {}, {}, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    click: (id: number) => void;
}, string, import('../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean | undefined;
    /**
     * size of the button
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * background color of the button
     */
    backgroundColor?: string | undefined;
}>, {
    primary: boolean;
}>>> & {
    onClick?: ((id: number) => any) | undefined;
}, {
    primary: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('../../vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('../../vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
