import React from "react";
import { Container, Item } from "../containers/Grids";
import { Form } from "../components/Form";
import { Text } from "../components/Text";
import { useState } from "react";
// import { UserFields } from "../components/FieldsData";

const PersonalInfo = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const UserFields = [
    {
      title: "First Name",
      label: "First Name",
      type: "text",
      placeholder: "First name",
      name: "firstName",

      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
    {
      title: "Last Name",
      label: "Last Name",
      type: "text",
      placeholder: "Last name",
      name: "lastName",
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
    {
      title: "email",
      label: "Email",
      type: "email",
      placeholder: "Email Address",
      name: "email",
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },
    {
      title: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Phone No",
      name: "phone",
      xs: 6,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 4,
    },

    {
      title: "city",
      label: "City",
      type: "text",
      placeholder: "City",
      name: "city",
    },
    {
      title: "state",
      label: "State",
      type: "text",
      placeholder: "State",
      name: "state",
    },
    {
      title: "zip",
      label: "Zip",
      type: "text",
      placeholder: "Zip",
      name: "zip",
    },
    {
      title: "country",
      label: "Country",
      type: "text",
      placeholder: "Country",
      name: "country",
    },
    {
      title: "Save Details",
      type: "submit",
      value: "Save",
    },
  ];
  return (
    <Container>
      <Item
        style={{
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
        }}
      >
        <Text
          title={props.title}
          style={{ color: props.color, marginBottom: props.TextMarginBottom }}
          variant={props.variant}
        >
          {props.title}
        </Text>
        <Form
          inputs={UserFields}
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
          value={values}
          setValues={setValues}
        />
      </Item>
    </Container>
  );
};

export default PersonalInfo;
