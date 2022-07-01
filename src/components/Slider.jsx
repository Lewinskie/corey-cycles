import React from "react";
import Slide from "react-slick";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Item } from "../containers/Grids";
import ProductCard from "./ProductCard";

const Slider = ({ products, images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  };
  const settings2 = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    height: "100%",
    width: "100%",
    centerMode: true,
    centerPadding: 0,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  console.log(products);
  return (
    <Container>
      {images && (
        <Item
          style={{
            height: "250px",
            width: "90vw",
            overflowX: "hidden",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "1rem",
          }}
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
      )}
      {products && (
        <Item>
          <Slide {...settings2}>
            {products.map(
              (product) =>
                product.featured && (
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    borderRadius="0.5rem"
                    background="linear-gradient(to bottom, #56C596 0%, #329d9c 100%)"
                    btnBackground="#2C838E"
                    btnColor="#CFF4D2
                    "
                  />
                )
            )}
          </Slide>
        </Item>
      )}
    </Container>
  );
};

export default Slider;
