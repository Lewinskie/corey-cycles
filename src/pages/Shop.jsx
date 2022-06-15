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

const Shop = () => {
  const categories = useSelector((state) =>
    state.products.map((product) => product.category)
  );
  console.log(categories);
  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state.products);
  useEffect(() => {
    setProducts(state);
  }, []);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(2);

  //get current products
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;
  const currentProducts = products.slice(first, last);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
    console.log(pageNumber);
  };

  return (
    <Container>
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        align="center"
        justify="center"
        marginTop="4rem"
      >
        <Text title="Corey Cycles & Co." variant="h3" color="#053886" />
      </Item>
      <Item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        flex="flex"
        align="center"
        justify="center"
        marginTop="2rem"
        paddingBottom="2rem"
        borderBottom="1px solid #e6e6e6"
      >
        <SearchInput size="small" placeholder="Search" />
      </Item>

      <Item xs={12} sm={12} md={12} lg={12} xl={12} background="#fff">
        {!categories ? null : <Categories categories={categories} />}
      </Item>
      <Item
        xs={2}
        sm={3}
        md={3}
        lg={3}
        xl={3}
        background="#05386B"
        flex="flex"
        align="center"
        justify="center"
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
        background="#05386B"
        flex="flex"
        align="center"
        justify="center"
      >
        <Newsletter />
      </Item>
      <Item xs={6} sm={4} md={4} lg={4} xl={4} background="#fff">
        <Text title="Header regarding product" variant="h5" color="#053886" />
        <Text title="Product description" variant="body1" color="#053886" />
      </Item>
      <Item xs={6} sm={8} md={8} lg={8} xl={8}>
        <Container spacing="6">
          {!products
            ? null
            : currentProducts.map((product) => (
                <Item xs={12} sm={6} md={6} lg={4} xl={4} key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                  />
                </Item>
              ))}
        </Container>
        <Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          flex="flex"
          align="center"
          justify="center"
          marginTop="0.5rem"
          marginBottom="0.5rem"
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
