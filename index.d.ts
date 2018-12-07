declare module 'styled-bootstrap-grid' {
    import { css, createGlobalStyle } from 'styled-components';
    import * as React from 'react';








    export type RowProps = {
        alignItems?: Align;
        smAlignItems?: Align;
        mdAlignItems?: Align;
        lgAlignItems?: Align;
        xlAlignItems?: Align;
        justifyContent?: Justify;
        smJustifyContent?: Justify;
        mdJustifyContent?: Justify;
        lgJustifyContent?: Justify;
        xlJustifyContent?: Justify;
    };


    export const media: {
        [label: Media]: ReturnType<typeof css>;
        min: { [label: Media]: ReturnType<typeof css> };
        max: { [label: Media]: ReturnType<typeof css> };
    };
    export class Container extends React.Component<ContainerProps> {}
    export class Row extends React.Component<RowProps> {}
    export class Col extends React.Component<ColProps> {}
    export const BaseCSS: ReturnType<typeof createGlobalStyle>;
}
