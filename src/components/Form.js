import { TextField } from "@mui/material";
import { Container, Item } from "../containers/Grids";
import { ShopNowButton } from "./Buttons";

export const Form = (props) => {
  return (
    <Container spacing={props.spacing}>
      {props.inputs.map((item) =>
        item.name === "text" ? (
          <Item
            xs={item.xs}
            sm={item.sm}
            md={item.md}
            lg={item.lg}
            xl={item.xl}
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
          >
            <ShopNowButton
              key={item.name}
              title={item.title}
              size={props.size}
              variant={item.variant}
              color={item.color}
              background={item.background}
              flex={item.flex}
              justify={item.justify}
              align={item.align}
            />
          </Item>
        )
      )}
    </Container>
  );
};
