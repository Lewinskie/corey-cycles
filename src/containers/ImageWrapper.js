export const ImageWrapper = (props) => {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        display: props.flex,
        alignItems: props.align,
        justifyContent: props.justify,
        background: props.background,
        paddingRight: props.paddingRight,
        PaddingLeft: props.paddingLeft,
        PaddingTop: props.paddingTop,
        PaddingBottom: props.paddingBottom,
        marginRight: props.marginRight,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
    >
      {props.children}
    </div>
  );
};
export const Img = (props) => {
  return (
    <img
      src={props.src}
      style={{
        objectFit: props.objectFit,
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
        blur: props.blur,
        maxWidth: props.maxWidth,
      }}
      alt={props.alt}
    />
  );
};
