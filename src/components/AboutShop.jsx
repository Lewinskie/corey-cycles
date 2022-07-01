import React from "react";
import { Container, Item } from "../containers/Grids";
import { Text } from "./Text";

const AboutShop = () => {
  return (
    <Container width="75%">
      <Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "4rem",
        }}
      >
        <Text variant="h4" style={{ color: "#CFF4D2", marginBottom: "1rem" }}>
          About Corey Cycles & Co.
        </Text>
      </Item>
      <Item style={{ marginBottom: "4rem" }}>
        <Text variant="p" style={{ color: "#E9E8E6" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ad?
          Dignissimos pariatur totam animi nam cumque deserunt quaerat quae et.
          Placeat alias explicabo quas consectetur soluta accusantium sequi
          possimus. Laboriosam sapiente, maxime eius vero ipsa eveniet
          asperiores odio incidunt mollitia tempora corrupti voluptas dolorem.
          Modi odit dolore labore pariatur itaque omnis dicta eaque
          reprehenderit perferendis, incidunt debitis culpa dolores laudantium.
        </Text>
      </Item>
    </Container>
  );
};

export default AboutShop;
