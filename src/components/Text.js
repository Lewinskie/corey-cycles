import { Typography } from "@mui/material";

export const Text = (props) => {
  return (
    <Typography variant={props.variant} style={{ color: props.color }}>
      {props.title}
    </Typography>
  );
};
