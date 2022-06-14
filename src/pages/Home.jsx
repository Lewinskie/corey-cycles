import React from "react";
import { Helmet } from "react-helmet";

import { Container, Item } from "../containers/Grids";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import AboutShop from "../components/AboutShop";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hero />
        </Item>

        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FeaturedProducts />
        </Item>
        <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          background="#05386B"
          flex="flex"
          align="center"
          justify="center"
        >
          <Newsletter />
        </Item>

        <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          background="#fff"
          flex="flex"
          align="center"
          justify="center"
        >
          <AboutShop />
        </Item>
      </Container>
    </div>
  );
};

export default Home;
