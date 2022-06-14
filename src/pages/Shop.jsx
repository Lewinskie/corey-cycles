import React from "react";
import { Container, Item } from "../containers/Grids";
import { SearchInput } from "../components/inputs";
import { Text } from "../components/Text";
import Categories from "../components/Categories";
import { useSelector } from "react-redux";
import Newsletter from "../components/Newsletter";
import Logo from "../components/Logo";

const Shop = () => {
  const categories = useSelector((state) =>
    state.products.map((product) => product.category)
  );
  console.log(categories);

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
      <Item xs={3} sm={3} md={3} lg={3} xl={3} background="#05386B">
        <Logo image="/photos/logo.png" />
      </Item>
      <Item
        xs={9}
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
    </Container>
  );
};

export default Shop;
