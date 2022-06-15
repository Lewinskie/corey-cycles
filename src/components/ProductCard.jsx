import React from "react";
import { Container, Item } from "../containers/Grids";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { ShopNowButton } from "./Buttons";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, name, description, price, featured }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Container
      background="#edf5e1"
      radius="0.5rem"
      paddingTop="0.5rem"
      paddingBottom="0.5rem"
      paddingLeft="0.5rem"
      paddingRight="0.5rem"
      boxShadow="0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)"
    >
      {image && (
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
            <Img src={image} alt={name} height="180px" objectFit="contain" />
          </ImageWrapper>
        </Item>
      )}

      <Item xs={4} sm={12} md={12} lg={12} xl={12}>
        {name && <Text title={name} variant="h5" color="#379683" />}

        {price && (
          <div style={{ display: "flex" }}>
            <Text title="Price:&nbsp;" variant="h7" color="#379683" />
            <Text title={price} variant="h7" color="#05386B" />
          </div>
        )}

        <ShopNowButton
          title="View"
          variant="contained"
          background="#05386B"
          color=""
          size="small"
          marginTop="1rem"
          marginBottom="1rem"
          onClick={() => {
            handleClick(id);
          }}
        />
      </Item>
      {description && (
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Text title="Description" underline="underline" color="#379683" />
          <Text title={description} color="#05386B" />
        </Item>
      )}
    </Container>
  );
};

export default ProductCard;
