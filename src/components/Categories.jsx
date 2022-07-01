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
    <Container style={{ padding: "2rem" }}>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Text title="" variant="h4" style={{ color: "#053886" }}>
          Featured Categories
        </Text>
      </Item>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Text
          title=""
          variant="subtitle"
          style={{ color: "grey", marginTop: "1rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          perferendis debitis numquam esse necessitatibus mollitia officia
          aspernatur dolorum error rerum.
        </Text>
      </Item>
      <Item
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          height: "250px",
          width: "90vw",
        }}
      >
        <Slide {...settings}>
          {uniqueCategories.map((category, index) => (
            <Link to={`/products/${category}`} key={index}>
              <Item
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                  borderRadius: "1rem",
                  padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              >
                <ImageWrapper
                  style={{
                    height: "150px",
                    flex: "flex",
                    align: "center",
                    justify: "center",
                    width: "100%",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "1rem",
                  }}
                >
                  <Img
                    src={categoryImages[index].image}
                    alt={category}
                    style={{
                      height: "100%",
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  />
                </ImageWrapper>
                <Text
                  variant="h6"
                  style={{
                    color: "#053886",
                    textDecoration: "none",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {category.toUpperCase()}
                </Text>
              </Item>
            </Link>
          ))}
        </Slide>
      </Item>
    </Container>
  );
};

export default Categories;
