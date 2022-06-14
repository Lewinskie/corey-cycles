import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";
import { ImageWrapper, Img } from "../containers/ImageWrapper";

const Product = () => {
  const params = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === Number(params.id))
  );
  console.log(product);

  return (
    <Container boxShadow="2px">
      <Item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        flex="flex"
        align="center"
        justify="center"
        width="100%"
      >
        <ImageWrapper height="450px" width="100%">
          <Img
            src={product.image}
            height="100%"
            width="100%"
            objectFit="contain"
          />
        </ImageWrapper>
      </Item>
      <Item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Text title={product.name} />
        <Text title={product.description} />
      </Item>
    </Container>
  );
};

export default Product;
