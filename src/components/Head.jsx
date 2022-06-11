import { Typography } from "@mui/material";
import React from "react";

const Head = (props) => {
  return (
    <Typography
      variant="h2"
      style={{ paddingTop: props.rem, color: props.color }}
    >
      Corey Cycles & co.
    </Typography>
  );
};

export default Head;
