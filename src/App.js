import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";
import { Container, Item } from "./containers/Grids";

function App() {
  return (
    <Container spacing="2" background="#5cdb95" position="relative">
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        position="sticky"
        top="0"
        zIndex={1}
        background="#5cdb95"
        boxShadow="1px 1px 1px #379683"
        paddingBottom="0.5rem"
      >
        <Navbar />
      </Item>

      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12} height="900rem">
        <BottomNav />
      </Item>
    </Container>
  );
}

export default App;
