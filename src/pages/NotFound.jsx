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
    <Container height="80vh" background="#fff">
      <Item
        backgroundUrl="/photos/error.png"
        backgroundSize="auto 100%"
        backgroundPosition="center"
        flex="flex"
        align="flex-end"
        justify="center"
        paddingBottom="4rem"
      >
        <ShopNowButton
          title="Take me home"
          variant="contained"
          background="#05386B"
          onClick={handleClick}
        />
      </Item>
    </Container>
  );
};

export default NotFound;
