import React from "react";
import { Helmet } from "react-helmet";
import { ShopNowButton } from "../components/Buttons";
import Head from "../components/Head";
import Slider from "../components/Slider";
import { Container, Item } from "../containers/Grids";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container spacing="4">
        <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          flex="flex"
          center="center"
        >
          <Head />
        </Item>
        <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          height="300px"
          value="3"
          border="solid 1px gray"
        >
          <Slider />
        </Item>
        {/* <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ShopNowButton
            title="shop now"
            black="black"
            center="center"
            flex="flex"
            variant="contained"
          />
        </Item> */}
      </Container>
    </div>
  );
};

export default Home;
