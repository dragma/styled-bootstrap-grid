const DEFAULT_ALIASES = {
  xs: 'smaller',
  sm: 'phone',
  md: 'tablet',
  lg: 'desktop',
  xl: 'giant',
};
const DEFAULT_ALIASES_REVERSE = {
  smaller: 'xs',
  phone: 'sm',
  tablet: 'md',
  desktop: 'lg',
  giant: 'xl',
};

const makeAliases = (breakpoints = {}) => {
  console.log('breakpoints', breakpoints)
  const data = Object.assign({}, breakpoints);
  Object.keys(breakpoints).forEach(key => {
    if (DEFAULT_ALIASES[key]) {
      data[DEFAULT_ALIASES[key]] = breakpoints[key];
    }
  });

  Object.keys(breakpoints).forEach(key => {
    if (DEFAULT_ALIASES_REVERSE[key] && !data[DEFAULT_ALIASES_REVERSE[key]]) {
      data[DEFAULT_ALIASES_REVERSE[key]] = breakpoints[key];
    }
  });
  console.log('data', data)
  return data;
}

export default makeAliases;