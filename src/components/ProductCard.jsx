import React from "react";
import { Container, Item } from "../containers/Grids";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { Text } from "./Text";

const ProductCard = ({ product }) => {
  return (
    <Container
      //   background="gray"
      radius="1rem"
      padding="0.5rem"
      boxShadow="0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)"
    >
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text title={product.name} />
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <ImageWrapper
          height="200px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Img
            src={product.image}
            alt={product.name}
            height="150px"
            objectFit="contain"
          />
        </ImageWrapper>
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text title={product.price} />
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text title={product.description} />
      </Item>
    </Container>
  );
};

export default ProductCard;
