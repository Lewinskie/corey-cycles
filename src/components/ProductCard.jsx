import React from "react";
import { Container, Item } from "../containers/Grids";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { ShopNowButton } from "./Buttons";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <Container
      background="#edf5e1"
      radius="0.5rem"
      padding="0.5rem"
      boxShadow="0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)"
    >
      <Item
        xs={8}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        align="center"
        justify="center"
        width="100%"
      >
        <ImageWrapper height="200px">
          <Img
            src={product.image}
            alt={product.name}
            height="180px"
            objectFit="contain"
          />
        </ImageWrapper>
      </Item>
      <Item xs={4} sm={12} md={12} lg={12} xl={12}>
        <Text title={product.name} variant="h5" color="#379683" />

        <div style={{ display: "flex" }}>
          <Text title="Price:&nbsp;" variant="h7" color="#379683" />
          <Text title={product.price} variant="h7" color="#05386B" />
        </div>

        <ShopNowButton
          title="View"
          variant="contained"
          background="#05386B"
          color=""
          size="small"
          marginTop="1rem"
          marginBottom="1rem"
          onClick={() => {
            handleClick(product.id);
          }}
        />
      </Item>

      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text title="Description" underline="underline" color="#379683" />
        <Text title={product.description} color="#05386B" />
      </Item>
    </Container>
  );
};

export default ProductCard;
