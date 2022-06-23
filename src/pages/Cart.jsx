import React from "react";
import { useSelector } from "react-redux";
import { IconButtons, ShopNowButton } from "../components/Buttons";
import { Text } from "../components/Text";
import { Container, Item } from "../containers/Grids";
import { useNavigate } from "react-router-dom";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const navigate = useNavigate();

  const goToShop = (e) => {
    navigate("/shop");
  };
  //increase quantity
  const increase = (cartItem) => {
    dispatch(increaseQuantity(cartItem));
  };

  //decrease quantity
  const decrease = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };
  return (
    <Container paddingTop="4rem" minHeight="60vh">
      {cart.length === 0 ? (
        <Item
          flex="flex"
          align="flex-end"
          justify="center"
          backgroundUrl="/photos/emptycart.png"
          backgroundPosition="center center"
          backgroundSize="auto 100%"
          paddingBottom="1rem"
        >
          <ShopNowButton
            title="go back to shop"
            variant="contained"
            onClick={(e) => goToShop(e.target.id)}
          />
        </Item>
      ) : (
        <Item
          marginTop="2rem"
          paddingLeft="2rem"
          paddingRight="2rem"
          sm={8}
          md={8}
          lg={8}
          xl={8}
        >
          {cart.map((cartItem) => (
            <Container
              key={cartItem.id}
              boxShadow="0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1)"
              // border="1px solid grey"
              marginTop="0.5rem"
              radius="0.5rem"
              paddingTop="0.5rem"
              paddingBottom="0.5rem"
              paddingLeft="0.5rem"
              paddingRight="0.5rem"
            >
              {console.log(cartItem)}
              <Item xs={3} sm={3} md={3} lg={3} xl={3}>
                <ImageWrapper height="50px">
                  <Img
                    src={cartItem.image}
                    height="100%"
                    objectFit="scale-down"
                  />
                </ImageWrapper>
              </Item>
              <Item
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                flex="flex"
                align="center"
                justify="center"
              >
                <Text title={cartItem.name} variant="h7" color="#379683" />
              </Item>
              <Item
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                flex="flex"
                align="center"
                justify="center"
              >
                <Text title={cartItem.price} variant="h7" color="#379683" />
              </Item>
              <Item
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                flex="flex"
                align="center"
                justify="center"
              >
                <IconButtons
                  title="Add"
                  onClick={() => increase(cartItem.id)}
                />

                <Text title={cartItem.quantity} variant="h7" color="#379683" />
                <IconButtons
                  title="Remove"
                  onClick={() => decrease(cartItem.id)}
                />
              </Item>
            </Container>
          ))}
        </Item>
      )}
    </Container>
  );
};

export default Cart;
