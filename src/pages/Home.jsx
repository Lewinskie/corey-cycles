import React from "react";
// import { Helmet } from "react-helmet";

import { Container, Item } from "../containers/Grids";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import AboutShop from "../components/AboutShop";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
      <Container>
        <Item>
          <Hero />
        </Item>

        <Item>
          <FeaturedProducts />
        </Item>
        <Item background="#05386B" flex="flex" align="center" justify="center">
          <Newsletter />
        </Item>

        <Item background="#fff" flex="flex" align="center" justify="center">
          <AboutShop />
        </Item>
      </Container>
    </div>
  );
};

export default Home;
