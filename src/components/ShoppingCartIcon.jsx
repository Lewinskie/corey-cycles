import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ShoppingCartIcon = (props) => {
  return (
    <Link to="/cart">
      <ShoppingCart sx={{ color: props.color }} />
    </Link>
  );
};

export default ShoppingCartIcon;
