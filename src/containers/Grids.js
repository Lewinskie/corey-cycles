import { Grid } from "@mui/material";

export const Container = ({ children, spacing }) => {
  return (
    <Grid container spacing={spacing}>
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
  center,
  row,
  height,
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
        alignItems: center,
        justifyContent: center,
        flexDirection: row,
        height: height,
      }}
    >
      {children}
    </Grid>
  );
};
