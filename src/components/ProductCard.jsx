import React from "react";
import { Container, Item } from "../containers/Grids";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { ShopNowButton } from "./Buttons";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = (
  { id, image, name, description, price, featured, quantity },
  styles
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { radius, boxShadow } = styles;

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image,
        quantity: quantity,
      })
    );
  };
  const buttons = [
    {
      title: "View",
      onClick: () => handleView(id),
      variant: "contained",
      background: "#05386B",
    },
    {
      title: "Buy",
      onClick: () => handleAddToCart(),
      variant: "outlined",
      color: "#05386B",
    },
  ];
  return (
    <Container boxShadow={boxShadow} radius={radius} backgroundUrl={image}>
      {image && (
        <Item xs={8} flex="flex" align="center" justify="center" width="100%">
          <ImageWrapper height="150px">
            <Img
              src={image}
              alt={name}
              height="150px"
              objectFit="scale-down"
              width="100%"
            />
          </ImageWrapper>
        </Item>
      )}

      <Item xs={4}>
        {name && <Text title={name} variant="h5" color="#379683" />}

        {price && (
          <div style={{ display: "flex" }}>
            <Text title="Price:&nbsp;" variant="h7" color="#379683" />
            <Text title={price} variant="h7" color="#05386B" />
          </div>
        )}
        <Container>
          {buttons.map((button, index) => (
            <Item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              flex="flex"
              align="center"
              justify="center"
              key={index}
            >
              <ShopNowButton
                title={button.title}
                variant={button.variant}
                background={button.background}
                color={button.color}
                size="small"
                marginTop="1rem"
                marginBottom="1rem"
                onClick={button.onClick}
                width="90%"
              />
            </Item>
          ))}
        </Container>
      </Item>

      {description && (
        <Item>
          <Text title="Description" underline="underline" color="#379683" />
          <Text title={description} color="#05386B" />
        </Item>
      )}
    </Container>
  );
};

export default ProductCard;
