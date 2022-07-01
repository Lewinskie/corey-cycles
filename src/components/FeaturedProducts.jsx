import React from "react";
import { Container, Item } from "../containers/Grids";
import ProductCard from "./ProductCard";
import { Text } from "./Text";
import { useSelector } from "react-redux";
import Slider from "./Slider";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products);

  console.log(products);
  return (
    <Container
      style={{
        padding: "2rem",
      }}
    >
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          title=""
          variant="h3"
          style={{ color: "#F0ECE9", marginBottom: "2rem", marginTop: "2rem" }}
        >
          Featured Products
        </Text>
      </Item>

      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          position: "relative",
          padding: "10px",
        }}
      >
        <Slider products={products} />
      </Item>
    </Container>
  );
};

export default FeaturedProducts;
