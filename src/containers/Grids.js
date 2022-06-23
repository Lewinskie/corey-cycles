import { Grid } from "@mui/material";

export const Container = ({
  children,
  spacing,
  background,
  height,
  width,
  backgroundUrl,
  rowSpacing,
  columnSpacing,
  radius,
  padding,
  boxShadow,
  boxSizing,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  backgroundSize,
  backgroundPosition,
  minHeight,
}) => {
  return (
    <Grid
      container
      spacing={spacing}
      style={{
        background: background,
        height: height,
        width: width,
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition,
        rowSpacing: rowSpacing,
        columnSpacing: columnSpacing,
        borderRadius: radius,
        padding: padding,
        boxShadow: boxShadow,
        boxSizing: boxSizing,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        minHeight: minHeight,
      }}
    >
      {children}
    </Grid>
  );
};

export const Item = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  flex,
  align,
  justify,
  row,
  height,
  width,
  padding,
  margin,
  boxShadow,
  borderBottom,
  borderTop,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  position,
  top,
  zIndex,
  background,
  paddingBottom,
  overflowX,
  paddingLeft,
  paddingRight,
  paddingTop,
  backdropFilter,
  radius,
  column,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  backgroundUrl,
  className,
  // transform,
  border,
}) => {
  return (
    <Grid
      item
      xs={xs || 12}
      sm={sm || 12}
      md={md || 12}
      lg={lg || 12}
      xl={xl || 12}
      className={className}
      style={{
        display: flex,
        alignItems: align,
        justifyContent: justify,
        flexDirection: row || column,
        height: height,
        width: width,
        padding: padding,
        margin: margin,
        boxShadow: boxShadow,
        border: border,
        borderBottom: borderBottom,
        borderTop: borderTop,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        position: position,
        top: top,
        zIndex: zIndex,
        background: background,
        overflowX: overflowX,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        backdropFilter: backdropFilter,
        borderRadius: radius,
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: backgroundSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition,
      }}
    >
      {children}
    </Grid>
  );
};
