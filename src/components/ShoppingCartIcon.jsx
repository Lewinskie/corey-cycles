import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ShoppingCartIcon = () => {
  return (
    <Link to="/cart">
      <ShoppingCart />
    </Link>
  );
};

export default ShoppingCartIcon;
