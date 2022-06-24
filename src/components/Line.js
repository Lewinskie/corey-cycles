export const Line = (props) => {
  return (
    <div
      style={{
        borderTop: props.index !== 0 ? props.borderTop : "none",
        borderBottom: props.index !== 0 ? props.borderBottom : "none",
        borderLeft: props.borderLeft,
        borderRight: props.borderRight,
        height: props.height,
        width: props.width,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
      }}
    />
  );
};
