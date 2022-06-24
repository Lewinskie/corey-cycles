import { TextField } from "@mui/material";
import { Container, Item } from "../containers/Grids";
import { ShopNowButton } from "./Buttons";
// import { useState } from "react";

export const Form = (props) => {
  // const [name, setName] = useState("");

  console.log("Form props", props);
  return (
    <Container spacing={props.spacing} style={{ padding: props.padding }}>
      {props.inputs.map((item, index) =>
        item.type !== "submit" ? (
          <Item
            xs={item.xs ? item.xs : props.xs ? props.xs : 12}
            sm={item.sm ? item.sm : props.sm ? props.sm : 12}
            md={item.md ? item.md : props.md ? props.md : 12}
            lg={item.lg ? item.lg : props.lg ? props.lg : 12}
            xl={item.xl ? item.xl : props.xl ? props.xl : 12}
            key={index}
          >
            <TextField
              placeholder={item.placeholder}
              key={item.name}
              fullWidth
              size={props.size}
              variant={item.variant}
              sx={{
                input: { color: item.color },
              }}
              value={props.value[item.name]}
              onChange={(e) => {
                props.setValues(item.title, e.target.value);
              }}
            />
          </Item>
        ) : (
          <Item
            xs={item.xs}
            sm={item.sm}
            md={item.md}
            lg={item.lg}
            xl={item.xl}
            height={item.height}
            width={item.width}
            key={index}
          >
            <ShopNowButton
              key={item.name}
              title={item.title}
              size={props.size}
              variant={item.variant}
              color={item.color || props.color}
              background={item.background}
              flex={item.flex}
              justify={item.justify}
              align={item.align}
              onClick={props.onClick}
            />
          </Item>
        )
      )}
    </Container>
  );
};
