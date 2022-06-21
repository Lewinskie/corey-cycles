import React from "react";
import Slide from "react-slick";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Item } from "../containers/Grids";

const Slider = () => {
  const images = [
    { src: "/photos/yamaha.png" },
    { src: "/photos/helmet.png" },
    { src: "/photos/helmet.png" },
    { src: "/photos/repsol.png" },
  ];
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
      <Item
        height="250px"
        width="90vw"
        overflowX="hidden"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingTop="1rem"
      >
        <Slide {...settings}>
          {images.map((image) => (
            <ImageWrapper
              width="100%"
              flex="flex"
              height="200px"
              align="center"
              justify="center"
              key={image.src}
            >
              <Img
                src={image.src}
                height="200px"
                objectFit="contain"
                maxWidth="500px"
              />
            </ImageWrapper>
          ))}
        </Slide>
      </Item>
    </Container>
  );
};

export default Slider;
