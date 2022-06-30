export const ImageWrapper = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
export const Img = ({ alt, ...rest }) => {
  return <img alt={alt} {...rest} />;
};
