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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageWrapper style={{ height: "100px" }}>
          <Link to="/">
            <Img
              src="/photos/logo.png"
              alt="logo"
              style={{ height: "100%", objectFit: "contain" }}
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NavLinks decoration="underline" color="#fff" />
      </Item>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Copyright />
      </Item>
    </Container>
  );
};

export default BottomNav;
