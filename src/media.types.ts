import {
  FlattenInterpolation,
  Interpolation,
  SimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import { Breakpoints, SuperTheme } from './components/ThemeProvider';

export enum MediaLabels {
  xs = 'smaller',
  sm = 'phone',
  md = 'tablet',
  lg = 'desktop',
  xl = 'giant',
}

export enum MediaAliases {
  smaller = 'xs',
  phone = 'sm',
  tablet = 'md',
  desktop = 'lg',
  giant = 'xl',
}

export type Media = MediaLabels | MediaAliases;

export type MediaTagFunction<P extends {} = {}, T extends SuperTheme = SuperTheme> = (
  strings: TemplateStringsArray | NonNullable<SimpleInterpolation>,
  ...interpolations: Interpolation<ThemedStyledProps<P, T>>[]
) => FlattenInterpolation<ThemedStyledProps<P, T>>;

export type MapMediaToQuery = { [Key in Media]: MediaTagFunction };

export type MediaObject = MapMediaToQuery & {
  min: MapMediaToQuery;
  max: MapMediaToQuery;
};

export type GetBreakpointsFn = <P extends {} = {}>(
  props: ThemedStyledProps<P, SuperTheme>,
) => Breakpoints;
