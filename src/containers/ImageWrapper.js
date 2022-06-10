export const ImageWrapper = (props) => {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        display: props.flex,
        alignItems: props.center,
        justifyContent: props.center,
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
      }}
      alt={props.alt}
    />
  );
};
