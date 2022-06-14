import React from "react";
import { Container, Item } from "../containers/Grids";
import { ShopNowButton } from "./Buttons";
import { SearchInput } from "./inputs";
import { Text } from "./Text";

const Newsletter = () => {
  return (
    <Container spacing={2} padding="2rem 2rem 2rem 2rem" width="80%">
      <Item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Text
          title="Subscribe To Our Newsletter"
          variant="h4"
          color="#F0ECE9"
          textAlign="center"
          marginBottom="1rem"
          marginTop="2rem"
        />
        <Text
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vitae temporibus eius commodi repellendus perspiciatis fugiat, laudantium dolor omnis obcaecati ea ducimus itaque nam, totam deserunt libero vero error ut sint. Earum rem quibusdam hic, ab et illo! Obcaecati doloribus facere nesciunt quos quisquam, ratione aliquid sit voluptas magnam porro."
          variant="subtitle"
          color="#F0ECE9"
        />
      </Item>
      <Item
        xs={5}
        sm={5}
        md={5}
        lg={5}
        xl={5}
        marginBottom="2rem"
        marginTop="2rem"
        flex="flex"
        column="column"
      >
        <Text
          title="Enter Your Name"
          variant="subtitle"
          color="#F0ECE9"
          marginBottom="1rem"
        />
        <SearchInput
          placeholder="Enter Your Name"
          size="small"
          border="1px solid #F0ECE9"
          variant="outlined"
          helperText="Enter Your Name"
        />
      </Item>
      <Item
        xs={5}
        sm={5}
        md={5}
        lg={5}
        xl={5}
        marginBottom="2rem"
        marginTop="2rem"
        flex="flex"
        column="column"
      >
        <Text
          title="Enter Your Email"
          variant="subtitle"
          color="#F0ECE9"
          marginBottom="1rem"
        />
        <SearchInput
          placeholder="Enter Your Email"
          size="small"
          border="1px solid #F0ECE9"
          variant="outlined"
          helperText="Enter Your Email"
        />
      </Item>
      <Item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        flex="flex"
        align="center"
        justify="center"
        marginTop="2.2rem"
      >
        <ShopNowButton
          title="submit"
          type="submit"
          variant="contained"
          width="100%"
          background="#F0ECE9"
          color="#05386B"
        />
      </Item>
    </Container>
  );
};

export default Newsletter;
