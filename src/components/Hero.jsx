import React from "react";
import { Container, Item } from "../containers/Grids";
import Head from "../components/Head";
import { TypeWriter } from "../components/TypeWriter";
import Slider from "../components/Slider";
import { ShopNowButton } from "../components/Buttons";

const Hero = () => {
  const images = [
    { src: "/photos/yamaha.png" },
    { src: "/photos/helmet.png" },
    { src: "/photos/helmet2.png" },
    { src: "/photos/repsol.png" },
  ];
  return (
    <Container
      style={{
        background: `url("/photos/bikebackground.jpg")`,
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
        <Head color="#205072" />
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
          color="#205072"
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
          sx={{ background: "#205072", color: "#edf5e1" }}
          variant="contained"
        >
          Shop now
        </ShopNowButton>
      </Item>

      <Item
        value="3"
        style={{ height: "240px", backdropFilter: `blur(${2}px)` }}
      >
        <Slider images={images} />
      </Item>
    </Container>
  );
};

export default Hero;
