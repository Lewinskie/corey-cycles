import React from "react";
import { Container, Item } from "../containers/Grids";
import { Links } from "./Links";

const NavLinks = (props) => {
  return (
    <Container>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Links to="/shop" title="Shop" />
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Links to="/product:id" title="Product" />
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Links to="/shipping" title="Shipping" />
      </Item>
      <Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Links to="/payment" title="Payment" />
      </Item>
    </Container>
  );
};

export default NavLinks;
