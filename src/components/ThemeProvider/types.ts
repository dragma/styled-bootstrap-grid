import { MediaAliases, Media } from 'media.types';

export type Breakpoints = { [key in Media]: number };
export type PartialBreakpoints = Partial<Breakpoints>;

export interface Theme {
  breakpoints?: PartialBreakpoints;
  row?: {
    padding?: number;
  };
  col?: {
    padding?: number;
  };
  container?: {
    padding?: number;
    maxWidth?: PartialBreakpoints;
  };
}

export interface ThemeProps {
  gridTheme?: Theme;
}

export type DefaultContainerMaxWidth = { [K in MediaAliases]: number };

export interface MyTheme extends Theme {
  container: {
    padding?: number;
    maxWidth: PartialBreakpoints;
  };
  getContainerPadding: any;
  getContainerMaxWidth: any;
  getRowPadding: any;
  getColPadding: any;
}

export interface SuperTheme {
  styledBootstrapGrid: MyTheme;
}
