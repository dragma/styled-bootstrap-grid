import { Align } from 'components/Col/types';

export enum Justify {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Between = 'between',
  Around = 'around',
}

export interface RowProps {
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
}

export type RowCss = {
  alignItems: { [K in Align]: string };
  justifyContent: { [K in Justify]: string };
};
