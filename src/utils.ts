import { IsNumberFn, SuffixFn } from './utils.types';

export const isNumber: IsNumberFn = value => !Number.isNaN(parseInt(value + '', 10));
export const suffix: SuffixFn = value => (isNumber(value) ? `-${value}` : '');
