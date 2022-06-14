import React from "react";
import { Container, Item } from "../containers/Grids";
import { Text } from "./Text";

const AboutShop = () => {
  return (
    <Container width="75%">
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
        <Text
          title="About Corey Cycles & Co."
          variant="h4"
          color="#05386b"
          marginBottom="1rem"
        />
      </Item>
      <Item xs={12} sm={12} md={12} lg={12} xl={12} marginBottom="4rem">
        <Text
          title="  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ad? Dignissimos pariatur totam animi nam cumque deserunt quaerat quae et. Placeat alias explicabo quas consectetur soluta accusantium sequi possimus. Laboriosam sapiente, maxime eius vero ipsa eveniet asperiores odio incidunt mollitia tempora corrupti voluptas dolorem. Modi odit dolore labore pariatur itaque omnis dicta eaque reprehenderit perferendis, incidunt debitis culpa dolores laudantium."
          variant="p"
          color="#gray"
        />
      </Item>
    </Container>
  );
};

export default AboutShop;
