declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}

declare namespace React.JSX {
    interface IntrinsicElements {
        'model-viewer': any;
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': any;
        }
    }
}
