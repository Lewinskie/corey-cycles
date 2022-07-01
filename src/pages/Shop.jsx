import React, { useEffect, useState } from "react";
import { Container, Item } from "../containers/Grids";
import { SearchInput } from "../components/inputs";
import { Text } from "../components/Text";
import Categories from "../components/Categories";
import { useSelector } from "react-redux";
import Newsletter from "../components/Newsletter";
import Logo from "../components/Logo";
import { ImageWrapper } from "../containers/ImageWrapper";
import ProductCard from "../components/ProductCard";
import Paginations from "../components/Paginations";
import { Line } from "../components/Line";

const Shop = () => {
  const categories = useSelector((state) =>
    state.products.map((product) => product.category)
  );

  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state.products);
  useEffect(() => {
    setProducts(state);
  }, [state]);

  const [page, setPage] = useState(1);

  const [itemsPerPage] = useState(8);

  //get current products
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;
  const currentProducts = products.slice(first, last);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
    console.log(pageNumber);
  };

  return (
    <Container style={{ background: "#CFF4D2", width: "100%" }}>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Text title="Corey Cycles & Co." variant="h3" color="#053886" />
      </Item>
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <SearchInput size="small" placeholder="Search" />
      </Item>

      <Item
        style={{ background: "linear-gradient(to bottom, #CFF4D2,#56C596)" }}
      >
        {!categories ? null : <Categories categories={categories} />}
      </Item>
      <Item
        xs={2}
        sm={3}
        md={3}
        lg={3}
        xl={3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#329D9C",
        }}
      >
        <ImageWrapper>
          <Logo image="/photos/logo.png" />
        </ImageWrapper>
      </Item>
      <Item
        xs={10}
        sm={9}
        md={9}
        lg={9}
        xl={9}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#329D9C",
        }}
      >
        <Newsletter />
      </Item>

      <Item
        style={{
          background: "linear-gradient(to bottom, black, #0B1B27)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "2rem",
        }}
      >
        <Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <Text variant="h4" style={{ color: "#F0ECE9" }}>
            Shop
          </Text>
        </Item>
        <Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text variant="h7" style={{ color: "gray" }}>
            Find the products that satisfies your needs from our vast collection
            of products
          </Text>
        </Item>
        <Item>
          {/* <Filter categories={categories} /> */}
          <Text variant="h6" style={{ color: "#053886" }}>
            filter
          </Text>
        </Item>
      </Item>

      <Item
        style={{
          background: "linear-gradient(to bottom, #08131B, black)",
          padding: "4rem",
          width: "100%",
        }}
      >
        {!products ? null : (
          <Container gap={1}>
            {currentProducts.map((product) => (
              <Item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                key={product.id}
                style={{
                  borderRadius: "0.5rem",
                  background: "linear-gradient(to bottom, #133044,#0E2332)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                  btnBackground="#205072"
                  btnColor="#CFF4D2"
                  style={{
                    borderRadius: "0.5rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    boxShadow: "0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Item>
            ))}
          </Container>
        )}

        <Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            background: "#205072",
            borderRadius: "0.5rem",
            padding: "0.1rem 0.5rem",
          }}
        >
          <Paginations
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            handleClick={handleClick}
          />
        </Item>
      </Item>
    </Container>
  );
};

export default Shop;
