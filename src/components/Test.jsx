import React from "react";
import { Button } from "@mui/material";

const Test = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default Test;
