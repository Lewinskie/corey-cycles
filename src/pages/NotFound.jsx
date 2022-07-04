import React from "react";
import { ShopNowButton } from "../components/Buttons";
import { Container, Item } from "../containers/Grids";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container
      style={{
        height: "80vh",
      }}
    >
      <Item
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "4rem",
          background: "url(/photos/error.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          objectFit: "scale-down",
        }}
      >
        <ShopNowButton
          variant="contained"
          style={{ background: "#05386B" }}
          onClick={handleClick}
        >
          take me home
        </ShopNowButton>
      </Item>
    </Container>
  );
};

export default NotFound;
