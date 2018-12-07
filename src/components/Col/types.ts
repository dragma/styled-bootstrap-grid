type oneToTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type zeroToTwelve = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type zeroToEleven = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export enum End {
  First = 'first',
  Last = 'last',
}

export type Column = oneToTwelve | true | 'auto';
export type Order = zeroToTwelve | End;
export type Offset = zeroToEleven;

export enum Align {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}
export type AlignSelf = Align | 'auto';

export type ColProps = {
  noGutter?: boolean;
  col?: Column;
  auto?: boolean;
  alignSelf?: Align;
  offset?: Offset;
  order?: Order;
  xs?: Column;
  xsOffset?: Offset;
  xsAuto?: boolean;
  xsAlignSelf?: Align;
  xsOrder?: Order;
  hiddenXsUp?: boolean;
  hiddenXsDown?: boolean;
  sm?: Column;
  smOffset?: Offset;
  smAuto?: boolean;
  smAlignSelf?: Align;
  smOrder?: Order;
  hiddenSmUp?: boolean;
  hiddenSmDown?: boolean;
  md?: Column;
  mdOffset?: Offset;
  mdAuto?: boolean;
  mdAlignSelf?: Align;
  mdOrder?: Order;
  hiddenMdUp?: boolean;
  hiddenMdDown?: boolean;
  lg?: Column;
  lgOffset?: Offset;
  lgAuto?: boolean;
  lgAlignSelf?: Align;
  lgOrder?: Order;
  hiddenLgUp?: boolean;
  hiddenLgDown?: boolean;
  xl?: Column;
  xlOffset?: Offset;
  xlAuto?: boolean;
  xlAlignSelf?: Align;
  xlOrder?: Order;
  hiddenXlUp?: boolean;
  hiddenXlDown?: boolean;
};

export type ColCss = {
  col: { [K in oneToTwelve | 'true' | 'auto']: string };
  offset: { [K in Offset]: string };
  order: { [K in Order]: string };
  alignSelf: { [K in AlignSelf]: string };
  display: { none: string };
  noGutter: string;
};
