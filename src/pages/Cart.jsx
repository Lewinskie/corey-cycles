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
    <Container style={{ paddingTop: "4rem", minHeight: "60vh" }}>
      <Item
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Text title="Shopping Cart" variant="h4" color="#05386B" />
      </Item>
      {cart.length === 0 ? (
        <Item
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            background: ` url("/photos/emptycart.png")`,
            backgroundPosition: "center center",
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            paddingBottom: "1rem",
            height: "50vh",
          }}
        >
          <ShopNowButton
            variant="contained"
            onClick={(e) => goToShop(e.target.id)}
          >
            go back to shop
          </ShopNowButton>
        </Item>
      ) : (
        <Container
          style={{
            minHeight: "30%",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <Item
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              marginTop: "2rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cart.map((cartItem) => (
              <Container
                key={cartItem.id}
                style={{
                  boxShadow: "0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1)",
                  marginTop: "0.5rem",
                  BorderRadius: "0.5rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                {console.log(cartItem)}
                <Item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <ImageWrapper
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "50px",
                    }}
                  >
                    <Img
                      src={cartItem.image}
                      style={{ height: "100%", objectFit: "scale-down" }}
                      alt={cartItem.name}
                    />
                  </ImageWrapper>
                </Item>
                <Item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text title={cartItem.name} variant="h7" color="#05386B" />
                </Item>
                <Item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text title={cartItem.price} variant="h7" color="#05386B" />
                </Item>
                <Item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButtons
                    title="Add"
                    onClick={() => increase(cartItem.id)}
                    style={{ color: "#05386B" }}
                  />

                  <Text
                    title={cartItem.quantity}
                    variant="h7"
                    color="#05386B"
                  />
                  <IconButtons
                    title="Remove"
                    onClick={() => decrease(cartItem.id)}
                    style={{ color: "#05386B" }}
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
            style={{
              alignItems: "center",
              display: "flex",
              paddingTop: "1.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              marginTop: "2rem",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "2rem",
              borderRadius: "0.5rem",
              boxShadow: "0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <Totals totalCost={total} itemsInCart={cart.length} />
            <ShopNowButton
              style={{
                marginTop: "1.5rem",
                width: "100%",
                marginBottom: "1.5rem",
              }}
              sx={{ backgroundColor: "#05386B" }}
              variant="contained"
              onClick={goToCheckOut}
            >
              checkout
            </ShopNowButton>
          </Item>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
