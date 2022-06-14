import React from "react";
import { Container, Item } from "../containers/Grids";
import { Links } from "./Links";

const NavLinks = (props) => {
  const links = [
    { to: "/", title: "Home" },
    { to: "/shop", title: "Shop" },
    { to: "/shipping", title: "Shipping" },
    { to: "/payment", title: "Payment" },
  ];

  return (
    <Container>
      {links.map((link) => (
        <Item xs={3} sm={3} md={3} lg={3} xl={3} key={link.title}>
          <Links
            to={link.to}
            title={link.title}
            weight={props.weight}
            decoration={props.decoration}
            color={props.color}
          />
        </Item>
      ))}
    </Container>
  );
};

export default NavLinks;
