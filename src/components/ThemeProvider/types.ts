import { MediaAliases, Media } from '../../media/types';

export type Breakpoints = { [key in Media]: number };
export type PartialBreakpoints = Partial<Breakpoints>;

interface GridTheme {
  breakpoints?: PartialBreakpoints;
  row?: {
    padding?: number;
  };
  col?: {
    padding?: number;
    gridColumns?: number;
  };
  container?: {
    padding?: number;
    maxWidth?: PartialBreakpoints;
  };
}

export interface ThemeProps {
  gridTheme?: GridTheme;
  children: React.ReactChild;
}

export type DefaultContainerMaxWidth = { [K in MediaAliases]: number };

export interface StyledBootstrapGrid extends GridTheme {
  container: {
    padding?: number;
    maxWidth: PartialBreakpoints;
  };
  getContainerPadding: any;
  getContainerMaxWidth: any;
  getRowPadding: any;
  getColPadding: any;
  getColGridColumn: any;
}

export interface Theme {
  styledBootstrapGrid: StyledBootstrapGrid;
}
