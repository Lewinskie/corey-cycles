import React from "react";
import Slide from "react-slick";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Item } from "../containers/Grids";

const Slider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  };
  return (
    <Container>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Slide {...settings}>
          <ImageWrapper
            width="100vw"
            flex="flex"
            height="200px"
            center="center"
          >
            <Img src="/photos/yamaha.png" height="200px" objectFit="contain" />
          </ImageWrapper>
          <ImageWrapper
            width="100vw"
            flex="flex"
            height="200px"
            center="center"
          >
            <Img src="/photos/helmet.png" height="200px" objectFit="contain" />
          </ImageWrapper>
          <ImageWrapper
            width="100vw"
            flex="flex"
            height="200px"
            center="center"
          >
            <Img src="/photos/repsol.png" height="200px" objectFit="contain" />
          </ImageWrapper>
        </Slide>
      </Item>
    </Container>
  );
};

export default Slider;
