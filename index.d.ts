declare module 'styled-bootstrap-grid' {
  import { css, StyledComponentClass, ThemeProviderComponent } from 'styled-components';
  import * as React from 'react';

  export const media: { [label: string]: ReturnType<typeof css> };
  export class Container extends React.Component<ContainerProps> {}
  export class Row extends React.Component<RowProps> {}
  export class Col extends React.Component<ColProps> {}
  export const BaseCSS: ReturnType<typeof createGlobalStyle>;
  export class GridThemeProvider<P extends ThemeProps = {}> extends React.Component<P> {}

  export type Smaller = 'xs' | 'smaller';
  export type Phone = 'sm' | 'phone';
  export type Tablet = 'md' | 'tablet';
  export type Desktop = 'lg' | 'desktop';
  export type Giant = 'xl' | 'giant';

  export type Media = Smaller | Phone | Tablet | Desktop | Giant;

  export type ThemeProps = {
    gridTheme?: {
      breakpoints?: { [key in Media]?: number };
      row?: {
        padding?: number;
      };
      col?: {
        padding?: number;
      };
      container?: {
        padding?: number;
        maxWidth?: { [key in Media]?: number };
      };
    };
  };

  type oneToTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  type zeroToTwelve = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  type zeroToEleven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  export enum End {
    First = 'firt',
    Last = 'last',
  }

  export enum Align {
    Start = 'start',
    End = 'end',
    Center = 'center',
    Baseline = 'baseline',
    Stretch = 'stretch',
  }

  export enum Justify {
    Start = 'start',
    End = 'end',
    Center = 'center',
    Between = 'between',
    Around = 'around',
  }

  export type Column = oneToTwelve | true;
  export type Order = zeroToTwelve | End;

  export type ContainerProps = {
    fluid?: boolean;
  };

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

  export type ColProps = {
    noGutter?: boolean;
    col?: Column;
    auto?: boolean;
    alignSelf?: Align;
    offset?: zeroToEleven;
    order?: Order;
    xs?: Column;
    xsOffset?: zeroToEleven;
    xsAuto?: boolean;
    xsAlignSelf?: Align;
    xsOrder?: Order;
    hiddenXsUp?: boolean;
    hiddenXsDown?: boolean;
    sm?: Column;
    smOffset?: zeroToEleven;
    smAuto?: boolean;
    smAlignSelf?: Align;
    smOrder?: Order;
    hiddenSmUp?: boolean;
    hiddenSmDown?: boolean;
    md?: Column;
    mdOffset?: zeroToEleven;
    mdAuto?: boolean;
    mdAlignSelf?: Align;
    mdOrder?: Order;
    hiddenMdUp?: boolean;
    hiddenMdDown?: boolean;
    lg?: Column;
    lgOffset?: zeroToEleven;
    lgAuto?: boolean;
    lgAlignSelf?: Align;
    lgOrder?: Order;
    hiddenLgUp?: boolean;
    hiddenLgDown?: boolean;
    xl?: Column;
    xlOffset?: zeroToEleven;
    xlAuto?: boolean;
    xlAlignSelf?: Align;
    xlOrder?: Order;
    hiddenXlUp?: boolean;
    hiddenXlDown?: boolean;
  };
}
