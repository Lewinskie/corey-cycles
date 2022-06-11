import React from "react";
import { Container, Item } from "../containers/Grids";
import Logo from "../components/Logo";
import NavLinks from "./NavLinks";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <Container spacing="5">
      <Item xs={3} sm={5} md={6} lg={6} xl={6}>
        <Logo color="#05386b" />
      </Item>

      <Item xs={8} sm={6} md={5} lg={5} xl={5} flex="flex" align="center">
        <NavLinks />
      </Item>
      <Item xs={1} sm={1} md={1} lg={1} xl={1} flex="flex" align="center">
        <ShoppingCartIcon color="#05386b" />
      </Item>
    </Container>
  );
};

export default Navbar;
