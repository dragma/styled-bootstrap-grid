const buildProps = (props, propsKeys = ['children']) => {
  const otherProps =
    Object
      .keys(props)
      .filter(key => propsKeys.indexOf(key) === -1)
      .reduce((acc, key) => {
          acc[key] = props[key];
          return acc;
        }, {}
      );
  return otherProps;
};

export default buildProps;
