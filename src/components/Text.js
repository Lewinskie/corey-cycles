import { Typography } from "@mui/material";

export const Text = (props) => {
  return (
    <Typography
      variant={props.variant}
      style={{
        color: props.color,
        textDecoration: props.underline,
        margin: props.margin,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        textAlign: props.textAlign,
      }}
    >
      {props.title}
    </Typography>
  );
};
