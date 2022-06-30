import React from "react";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";
import { Line } from "./Line";

const Totals = (props) => {
  const titles = [
    { title: "Total items in cart", content: props.itemsInCart },
    { title: "Total cost:", content: props.totalCost + " Ksh" },
  ];
  return (
    <Container
      style={{
        border: "solid 0.2px rgba(0, 0, 0, 0.1)",
        height: "10rem",
        borderRadius: "0.5rem",
      }}
    >
      {titles.map((item, index) => (
        <Item
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text title={item.title} color="#05386B" />
          <Line
            width="90%"
            borderBottom="solid 0.2px rgba(0, 0, 0, 0.1)"
            borderTop="solid 0.2px rgba(0, 0, 0, 0.1)"
            index={index}
            marginTop="-3px"
            height="3px"
          />

          <Text title={item.content} color="red" />
        </Item>
      ))}
    </Container>
  );
};

export default Totals;
