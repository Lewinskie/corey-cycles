import React from "react";
import { Container, Item } from "../containers/Grids";
import Copyright from "./Copyright";
import NavLinks from "./NavLinks";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <Container>
      <Item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        flex="flex"
        align="center"
        justify="center"
      >
        <ImageWrapper height="100px">
          <Link to="/">
            <Img
              src="/photos/logo.png"
              alt="logo"
              height="100%"
              objectFit="contain"
            />
          </Link>
        </ImageWrapper>
      </Item>
      <Item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        flex="flex"
        align="center"
        justify="center"
      >
        <NavLinks decoration="underline" color="#fff" />
      </Item>
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        align="center"
        justify="center"
        marginBottom="2rem"
        marginTop='1rem'
      >
        <Copyright />
      </Item>
    </Container>
  );
};

export default BottomNav;
