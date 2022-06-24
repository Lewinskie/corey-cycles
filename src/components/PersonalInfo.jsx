import React from "react";
import { Container, Item } from "../containers/Grids";
import { Form } from "../components/Form";
import { Text } from "../components/Text";

const PersonalInfo = (props) => {
  return (
    <Container>
      <Item
        paddingTop={props.paddingTop}
        paddingBottom={props.paddingBottom}
        paddingRight={props.paddingRight}
        paddingLeft={props.paddingLeft}
      >
        <Text
          title={props.title}
          color={props.color}
          variant={props.variant}
          marginBottom={props.TextMarginBottom}
        />
        <Form
          inputs={props.fields}
          size={props.size}
          xs={3}
          sm={3}
          md={2}
          lg={2}
          xl={2}
          spacing={props.spacing}
          color={props.color}
          onClick={props.onClick}
          onChange={props.onChange}
          value={props.value}
          setValues={props.setValues}
        />
      </Item>
    </Container>
  );
};

export default PersonalInfo;
