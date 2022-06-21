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
  const style = {
    radius: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    boxShadow: "0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)",
  };

  return (
    <Container background="#fff">
      <Item flex="flex" align="center" justify="center" marginTop="4rem">
        <Text title="Corey Cycles & Co." variant="h3" color="#053886" />
      </Item>
      <Item
        flex="flex"
        align="center"
        justify="center"
        marginTop="2rem"
        paddingBottom="2rem"
        borderBottom="1px solid #e6e6e6"
      >
        <SearchInput size="small" placeholder="Search" />
      </Item>

      <Item background="#fff">
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
      <Item background="#fff">
        <Text title="Shop" variant="h5" color="#053886" />
        <Text
          title="Find the products that satisfies your needs from our vast collection of products"
          variant="body1"
          // color="#053886"
        />
      </Item>
      <Item xs={12} sm={4} md={4} lg={4} xl={4}>
        {/* <Filter categories={categories} /> */}
      </Item>
      <Item
        paddingTop="1rem"
        paddingLeft="1rem"
        paddingRight="1rem"
        xs={12}
        sm={8}
        md={8}
        lg={8}
        xl={8}
      >
        <Container spacing="10" height="100%" width="100%">
          {!products
            ? null
            : currentProducts.map((product) => (
                <Item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  key={product.id}
                  className="shopProducts"
                  height="100%"
                  width="100%"
                >
                  <ProductCard
                    style={style}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    height="250px"
                    hoverBackground="black"
                  />
                </Item>
              ))}
        </Container>
        <Item
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
