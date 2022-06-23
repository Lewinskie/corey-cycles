import React from "react";
import { Container, Item } from "../containers/Grids";
import { Text } from "../components/Text";

const Totals = (props) => {
  const titles = [
    { title: "total items in cart", content: props.itemsInCart },
    { title: "total cost", content: props.totalCost + " Ksh" },
  ];
  return (
    <Container border='solid 0.2px rgba(0, 0, 0, 0.1)' height="10rem" radius="0.5rem">
      {titles.map((item, index) => (
        <Item
          key={index}
          flex="flex"
          align="center"
          justify="center"
          column="column"
        
        >
          <Text title={item.title} />
          
          <Text title={item.content} />
        </Item>
      ))}
    </Container>
  );
};

export default Totals;
