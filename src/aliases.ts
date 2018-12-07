import { Media, MediaLabels, MediaAliases } from 'media.types';
import { MakeAliases } from 'aliases.types';

const makeAliases: MakeAliases = (breakpoints = {}) => {
  const data = Object.assign({}, breakpoints);
  const breakpointsKeys = Object.keys(breakpoints) as Media[];

  breakpointsKeys.forEach((key: Media) => {
    const key1 = key as keyof typeof MediaLabels;
    const key2 = key as keyof typeof MediaAliases;

    if (MediaLabels[key1]) {
      data[MediaLabels[key1]] = breakpoints[key];
    }

    if (MediaAliases[key2] && !data[MediaAliases[key2]]) {
      data[MediaAliases[key2]] = breakpoints[key];
    }
  });

  return data;
};

export default makeAliases;
