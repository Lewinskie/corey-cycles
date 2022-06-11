import React from "react";
import { Container, Item } from "../containers/Grids";
import Head from "../components/Head";
import { TypeWriter } from "../components/TypeWriter";
import Slider from "../components/Slider";
import { ShopNowButton } from "../components/Buttons";

const Hero = () => {
  return (
    <Container backgroundUrl="/photos/bikebackground.jpg">
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        justify="center"
        align="center"
      >
        <Head color="#053886" />
      </Item>
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        height="3rem"
        flex="flex"
        align="center"
        justify="center"
      >
        <TypeWriter
          color="#053886"
          variant="body"
          size="1rem"
          flex="flex"
          center="center"
        />
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ShopNowButton
          title="shop now"
          background="#053886"
          color="#edf5e1"
          justify="center"
          flex="flex"
          variant="contained"
        />
      </Item>

      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        height="240px"
        value="3"
        border="solid 1px gray"
        backdropFilter={`blur(${2}px)`}
      >
        <Slider />
      </Item>
    </Container>
  );
};

export default Hero;
