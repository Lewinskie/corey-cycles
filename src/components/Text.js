import { Typography } from "@mui/material";

export const Text = ({ children, ...rest }) => {
  return (
    <Typography
      // variant={props.variant}
      // style={{
      //   color: props.color,
      //   textDecoration: props.underline,
      //   margin: props.margin,
      //   marginTop: props.marginTop,
      //   marginBottom: props.marginBottom,
      //   textAlign: props.textAlign,
      // }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
