import React from "react";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { Link } from "react-router-dom";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = (props) => {
  const { categories } = props;
  //   check for repetations in the category names
  const uniqueCategories = [...new Set(categories)];
  // category images
  const categoryImages = [
    {
      name: "bike",
      image: "/category-images/bike.png",
    },
    {
      name: "gloves",
      image: "/category-images/gloves.png",
    },
    {
      name: "helmet",
      image: "/category-images/helmet.png",
    },
    {
      name: "wheels",
      image: "/category-images/wheels.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    arrows: false,
    padding: "0.5rem",
    responsive: [
      { breakpoint: 760, settings: { slidesToShow: 2 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container padding="2rem">
      <Item flex="flex" align="center" justify="center" marginTop="4rem">
        <Text title="Featured Categories" variant="h4" color="#053886" />
      </Item>
      <Item
        flex="flex"
        align="center"
        justify="center"
        paddingLeft="2rem"
        paddingRight="2rem"
      >
        <Text
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis debitis numquam esse necessitatibus mollitia officia aspernatur dolorum error rerum."
          variant="subtitle"
          color="grey"
          marginTop="1rem"
        />
      </Item>
      <Item marginTop="2rem" marginBottom="2rem" height="250px" width="90vw">
        <Slide {...settings}>
          {uniqueCategories.map((category, index) => (
            <Link to={`/products/${category}`} key={index}>
              <Item
                flex="flex"
                column="column"
                boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
                radius="1rem"
                padding="0.5rem 0.5rem 0.5rem 0.5rem"
                marginTop="0.5rem"
                marginBottom="0.5rem"
                marginLeft="0.5rem"
                marginRight="0.5rem"
                align="center"
                justify="center"
              >
                <ImageWrapper
                  height="150px"
                  flex="flex"
                  align="center"
                  justify="center"
                  width="100%"
                  paddingLeft="1rem"
                  paddingRight="1rem"
                  paddingTop="1rem"
                >
                  <Img
                    src={categoryImages[index].image}
                    alt={category}
                    height="100%"
                    objectFit="contain"
                    maxWidth="100%"
                  />
                </ImageWrapper>
                <Text
                  title={category.toUpperCase()}
                  variant="h6"
                  color="#053886"
                  underline="none"
                  marginTop="0.5rem"
                  marginBottom="0.5rem"
                />
              </Item>
            </Link>
          ))}
        </Slide>
      </Item>
    </Container>
  );
};

export default Categories;
