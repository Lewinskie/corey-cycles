import React from "react";
import { Container, Item } from "../containers/Grids";
import Head from "../components/Head";
import { TypeWriter } from "../components/TypeWriter";
import Slider from "../components/Slider";
import { ShopNowButton } from "../components/Buttons";

const Hero = () => {
  return (
    <Container
      style={{
        backgroundUrl: "/photos/bikebackground.jpg",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Head color="#053886" />
      </Item>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "3rem",
        }}
      >
        <TypeWriter
          color="#053886"
          variant="body"
          size="1rem"
          flex="flex"
          center="center"
        />
      </Item>
      <Item
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <ShopNowButton
          sx={{ background: "#053886", color: "#edf5e1" }}
          variant="contained"
        >
          Shop now
        </ShopNowButton>
      </Item>

      <Item
        value="3"
        style={{ height: "240px", backdropFilter: `blur(${2}px)` }}
      >
        <Slider />
      </Item>
    </Container>
  );
};

export default Hero;
