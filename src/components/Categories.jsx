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
  console.log(uniqueCategories);
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
    responsive: [
      { breakpoint: 760, settings: { slidesToShow: 2 } },
      { breakpoint: 550, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container padding="2rem">
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        align="center"
        justify="center"
        marginTop="4rem"
      >
        <Text title="Featured Categories" variant="h4" color="#053886" />
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
        paddingLeft="2rem"
        paddingRight="2rem"
      >
        <Text
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis debitis numquam esse necessitatibus mollitia officia aspernatur dolorum error rerum."
          variant="subtitle"
          color="grey"
          marginTop="1rem"
          marginBottom="1rem"
        />
      </Item>
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        height="250px"
        width="90vw"
        overflowX="hidden"
        paddingLeft="2rem"
        paddingRight="2rem"
        paddingTop="1rem"
      >
        <Slide {...settings}>
          {uniqueCategories.map((category, index) => (
            <Item xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
              <Link to={`/products/${category}`} key={index}>
                <ImageWrapper
                  height="150px"
                  flex="flex"
                  align="center"
                  justify="center"
                  width="100%"
                  paddingLeft="1rem"
                  paddingRight="1rem"
                >
                  <Img
                    src={categoryImages[index].image}
                    alt={category}
                    height="100%"
                    objectFit="contain"
                    maxWidth="100%"
                  />
                </ImageWrapper>
                <Text title={category} variant="h5" color="grey" />
              </Link>
            </Item>
          ))}
        </Slide>
      </Item>
    </Container>
  );
};

export default Categories;
