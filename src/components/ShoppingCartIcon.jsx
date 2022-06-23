import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const ShoppingCartIcon = (props) => {
  const cart = useSelector((state) => state.cart);
  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary">
        <ShoppingCart sx={{ color: props.color }} />
      </Badge>
    </Link>
  );
};

export default ShoppingCartIcon;
