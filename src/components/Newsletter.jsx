import React from "react";
import { Container, Item } from "../containers/Grids";
import { Form } from "./Form";
import { Text } from "./Text";

const Newsletter = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Enter your Name",
      title: "Name",
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      variant: "outlined",
      style: { color: "#fff" },
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      title: "Email",
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      variant: "outlined",
      style: { color: "#fff" },
    },
    {
      type: "submit",
      value: "Submit",
      title: "Subscribe",
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      variant: "contained",
      style: {
        background: "linear-gradient(to bottom,#297486, #173951)",
        color: "#CFF4D2",
      },
    },
  ];

  const text = [
    {
      title: "Subscribe to our Newsletter",
      variant: "h4",
      color: "#F0ECE9",
      marginBottom: "1rem",
      marginTop: "2rem",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vitae temporibus eius commodi repellendus perspiciatis fugiat, laudantium dolor omnis obcaecati ea ducimus itaque nam, totam deserunt libero vero error ut sint. Earum rem quibusdam hic, ab et illo! Obcaecati doloribus facere nesciunt quos quisquam, ratione aliquid sit voluptas magnam porro.",
      variant: "subtitle",
      color: "#F0ECE9",
    },
  ];
  return (
    <Container
      spacing={6}
      style={{ paddingTop: "2rem", paddingBottom: "2rem", width: "90%" }}
    >
      <Item xs={12} sm={12} md={8} lg={8} xl={8}>
        {text.map((text) => (
          <Text
            title={text.title}
            variant={text.variant}
            color={text.color}
            marginBottom={text.marginBottom}
            marginTop={text.marginTop}
            key={text.title}
          >
            {text.title}
          </Text>
        ))}
      </Item>

      <Item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form inputs={inputs} size="small" spacing="9" />
      </Item>
    </Container>
  );
};

export default Newsletter;
