type ValueType = boolean | null | undefined | number | string | object;

export type IsNumberFn = (value: ValueType) => boolean;
export type SuffixFn = (value: ValueType) => string;
