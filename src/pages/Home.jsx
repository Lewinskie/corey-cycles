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

        <Item
          style={{
            background: "linear-gradient(to bottom, #7BE495,#329D9C)",
          }}
        >
          <FeaturedProducts />
        </Item>
        <Item
          style={{
            background: "linear-gradient(to bottom, #329D9C,#205072)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Newsletter />
        </Item>

        <Item
          style={{
            background: "linear-gradient(to bottom, #205072,black)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AboutShop />
        </Item>
      </Container>
    </div>
  );
};

export default Home;
