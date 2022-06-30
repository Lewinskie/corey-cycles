import { Grid } from "@mui/material";

export const Container = ({ children, ...rest }) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};

export const Item = ({ children, xs, sm, md, lg, xl, ...rest }) => {
  return (
    <Grid
      item
      xs={xs || 12}
      sm={sm || 12}
      md={md || 12}
      lg={lg || 12}
      xl={xl || 12}
      {...rest}
    >
      {children}
    </Grid>
  );
};
