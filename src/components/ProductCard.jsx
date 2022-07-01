import React from "react";
import { Container, Item } from "../containers/Grids";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { ShopNowButton } from "./Buttons";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  featured,
  quantity,
  background,
  btnBackground,
  btnColor,
  ...rest
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      background: btnBackground,
      color: btnColor,
    },
    {
      title: "Buy",
      onClick: () => handleAddToCart(),
      variant: "outlined",
      color: btnColor,
    },
  ];
  return (
    <Container {...rest} style={{ background: background, padding: "0.5rem" }}>
      {image && (
        <Item
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ImageWrapper height="150px">
            <Img
              src={image}
              alt={name}
              style={{
                height: "150px",
                objectFit: "scale-down",
                width: "100%",
              }}
            />
          </ImageWrapper>
        </Item>
      )}

      <Item
        xs={4}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {name && (
          <Text title={name} variant="h6" color="#F0ECE9">
            {name}
          </Text>
        )}

        {price && (
          <div
            style={{ display: "flex", width: "100%", padding: "0rem 0.5rem" }}
          >
            <Text title="" variant="h7" color="#05386B">
              Price:&nbsp;
            </Text>
            <Text title={price} variant="h7" color="#CFF4D2">
              {price}&nbsp;KES
            </Text>
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={index}
            >
              <ShopNowButton
                variant={button.variant}
                style={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  width: "90%",
                }}
                sx={{
                  backgroundColor: button.background,
                  color: button.color,
                }}
                onClick={button.onClick}
                size="small"
              >
                {button.title}
              </ShopNowButton>
            </Item>
          ))}
        </Container>
      </Item>

      {description && (
        <Item>
          <Text title="" underline="underline" color="#379683">
            Description
          </Text>
          <Text title={description} color="#05386B">
            {description}
          </Text>
        </Item>
      )}
    </Container>
  );
};

export default ProductCard;
