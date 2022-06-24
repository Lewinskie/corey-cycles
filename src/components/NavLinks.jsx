import React from "react";
import { Container, Item } from "../containers/Grids";
import { Links } from "./Links";

const NavLinks = (props) => {
  const links = [
    { to: "/", title: "Home" },
    { to: "/shop", title: "Shop" },
    { to: "/cart", title: "Cart" },
  ];

  return (
    <Container>
      {props.links
        ? props.links.map((link) => (
            <Item xs={4} sm={4} md={4} lg={4} xl={4} key={link.title}>
              <Links
                to={link.to}
                title={link.title}
                weight={props.weight}
                decoration={props.decoration}
                color={props.color}
              />
            </Item>
          ))
        : links.map((link) => (
            <Item xs={4} sm={4} md={4} lg={4} xl={4} key={link.title}>
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
