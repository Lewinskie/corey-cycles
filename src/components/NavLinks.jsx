import React from "react";
import { Link } from "react-router-dom";
import { Container, Item } from "../containers/Grids";

const NavLinks = (props) => {
  return (
    <Container>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Link to="/shop">Shop</Link>
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Link to="/product:id">Product</Link>
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Link to="/shipping">Shipping</Link>
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Link to="/payment">Payment</Link>
      </Item>
    </Container>
  );
};

export default NavLinks;
