import React from "react";
import { Container, Item } from "../containers/Grids";
import ProductCard from "./ProductCard";
import { Text } from "./Text";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <Text title="Featured Products" variant="h3" color="#edf5e1" />

      <Container spacing={3}>
        {products.map(
          (product) =>
            product.featured && (
              <Item xs={4} sm={4} md={4} lg={4} xl={4}>
                <ProductCard key={product.id} product={product} />
              </Item>
            )
        )}
      </Container>
    </div>
  );
};

export default FeaturedProducts;
