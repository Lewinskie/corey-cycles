import React from "react";
import { Container, Item } from "../containers/Grids";
import ProductCard from "./ProductCard";
import { Text } from "./Text";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div
      style={{
        background: "#CECFCF",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        title="Featured Products"
        variant="h3"
        color="#05386b"
        marginBottom="2rem"
        marginTop="2rem"
      />

      <Container spacing={3}>
        {products.map(
          (product) =>
            product.featured && (
              <Item xs={12} sm={6} md={4} lg={4} xl={4} key={product.id}>
                <ProductCard
                  id={product.id}
                  category={product.category}
                  featured={product.featured}
                  image={product.image}
                  price={product.price}
                  name={product.name}
                  quantity={product.quantity}
                />
              </Item>
            )
        )}
      </Container>
    </div>
  );
};

export default FeaturedProducts;
