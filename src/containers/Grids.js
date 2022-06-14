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
}) => {
  return (
    <Grid
      container
      spacing={spacing}
      style={{
        background: background,
        minHeight: height,
        width: width,
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
}) => {
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      style={{
        display: flex,
        alignItems: align,
        justifyContent: justify,
        flexDirection: row || column,
        height: height,
        padding: padding,
        margin: margin,
        boxShadow: boxShadow,
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
      }}
    >
      {children}
    </Grid>
  );
};
