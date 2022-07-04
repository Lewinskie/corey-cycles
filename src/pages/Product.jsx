import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { ShopNowButton } from "../components/Buttons";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === Number(params.id))
  );
  console.log(product);
  const goBack = () => {
    navigate("/");
  };
  const addItemToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <Container
      style={{
        background: "linear-gradient(to bottom, #133044,black)",
        padding: "2rem",
      }}
    >
      <Item style={{ margin: "2rem 0rem" }}>
        <ShopNowButton style={{ color: "#cff4d2" }} onClick={goBack}>
          Go back to shop
        </ShopNowButton>
      </Item>
      <Item
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0rem",
        }}
      >
        <Text variant="h4" style={{ color: "#cff4d2" }}>
          {product.name}
        </Text>
      </Item>
      <Item
        container
        style={{
          background: "linear-gradient(to bottom, #133044,black)",
          borderRadius: "0.5rem",
          boxShadow: "0 0.1rem 0.5rem 0 rgba(50,157,156,0.75)",
        }}
      >
        <Item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "2rem",
            maxHeight: "400px",
          }}
        >
          <ImageWrapper
            style={{
              width: "100%",
              objectFit: "contain",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Img
              src={product.image}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </ImageWrapper>
        </Item>
        <Item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          container
          style={{
            padding: "2rem",
          }}
        >
          <Item
            container
            style={{
              padding: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0.1rem 0.5rem 0 rgba(50,157,156,0.75)",
            }}
          >
            <Item style={{ margin: " 0.5rem 0rem" }}>
              <Text variant="h5" style={{ color: "#cff4d2" }}>
                {product.name}
              </Text>
            </Item>
            <Item>
              <Text variant="subtitle1" style={{ color: "#cff4d2" }}>
                About&nbsp;{product.name}
              </Text>
              <Text variant="body" style={{ color: "#F0ECE9" }}>
                {product.description}
              </Text>
            </Item>
            <Item style={{ margin: " 0.5rem 0rem", display: "flex" }}>
              <Text variant="subtitle1" style={{ color: "#cff4d2" }}>
                Price :&nbsp;
              </Text>
              <Text variant="body" style={{ color: "red" }}>
                {product.price}&nbsp;KES
              </Text>
            </Item>
            <Item style={{ margin: " 0.5rem 0rem" }}>
              <ShopNowButton
                variant="contained"
                onClick={() => addItemToCart(product)}
                sx={{
                  color: "#cff4d2",
                  background: "linear-gradient(to bottom, #205072,#08131B)",
                }}
              >
                add to cart
              </ShopNowButton>
            </Item>
          </Item>
        </Item>
      </Item>
    </Container>
  );
};

export default Product;
