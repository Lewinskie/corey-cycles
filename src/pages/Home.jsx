import React from "react";
import { Helmet } from "react-helmet";

import { Container, Item } from "../containers/Grids";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import HotDeals from "../components/HotDeals";
import AboutShop from "../components/AboutShop";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container spacing="2">
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hero />
        </Item>

        {/* <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          height="1px"
          marginTop="2rem"
          boxShadow="1px 1px 1px #05386b"
        /> */}
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FeaturedProducts />
        </Item>
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Newsletter />
        </Item>
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <HotDeals />
        </Item>
        <Item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AboutShop />
        </Item>
      </Container>
    </div>
  );
};

export default Home;
