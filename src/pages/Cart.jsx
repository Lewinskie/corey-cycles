import React from "react";
import { useSelector } from "react-redux";
import { IconButtons, ShopNowButton } from "../components/Buttons";
import { Text } from "../components/Text";
import { Container, Item } from "../containers/Grids";
import { useNavigate } from "react-router-dom";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/slices/cartSlice";
import Totals from "../components/Totals";
import { userCart } from "../redux/slices/usersSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const navigate = useNavigate();

  // total cost of items in cart
  const total = cart.reduce(
    (total, currentItem) => (total = Number(total) + Number(currentItem.price)),
    0
  );

  const goToShop = (e) => {
    navigate("/shop");
  };
  const goToCheckOut = () => {
    navigate("/payment");
    dispatch(userCart({ ItemsInCart: cart.length, TotalCost: total }));
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
      <Item flex="flex" justify="center" width="100%">
        <Text title="Shopping Cart" variant="h4" color="#05386B" />
      </Item>
      {cart.length === 0 ? (
        <Item
          flex="flex"
          align="flex-end"
          justify="center"
          backgroundUrl="/photos/emptycart.png"
          backgroundPosition="center center"
          backgroundSize="auto 100%"
          paddingBottom="1rem"
          height="50vh"
        >
          <ShopNowButton
            title="go back to shop"
            variant="contained"
            onClick={(e) => goToShop(e.target.id)}
          />
        </Item>
      ) : (
        <Container minheight="30%" paddingLeft="1rem" paddingRight="1rem">
          <Item
            marginTop="2rem"
            paddingLeft="2rem"
            paddingRight="2rem"
            sm={8}
            md={8}
            lg={8}
            xl={8}
            flex="flex"
            column="column"
            justify="center"
            align="center"
          >
            {cart.map((cartItem) => (
              <Container
                key={cartItem.id}
                boxShadow="0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1)"
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
                  <Text title={cartItem.name} variant="h7" color="#05386B" />
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
                  <Text title={cartItem.price} variant="h7" color="#05386B" />
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
                    color="#05386B"
                  />

                  <Text
                    title={cartItem.quantity}
                    variant="h7"
                    color="#05386B"
                  />
                  <IconButtons
                    title="Remove"
                    onClick={() => decrease(cartItem.id)}
                    color="#05386B"
                  />
                </Item>
              </Container>
            ))}
          </Item>
          <Item
            sm={4}
            md={4}
            lg={4}
            xl={4}
            align="center"
            flex="flex"
            paddingTop="1.5rem"
            paddingBottom="0.5rem"
            paddingLeft="1.5rem"
            paddingRight="1.5rem"
            marginTop="2rem"
            column="column"
            justify="center"
            marginBottom="2rem"
            radius="0.5rem"
            boxShadow="0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1)"
          >
            <Totals totalCost={total} itemsInCart={cart.length} />
            <ShopNowButton
              title="checkout"
              marginTop="1.5rem"
              variant="contained"
              width="100%"
              marginBottom="1.5rem"
              background="#05386B"
              onClick={goToCheckOut}
            />
          </Item>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
