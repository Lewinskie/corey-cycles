import { TextField } from "@mui/material";
import { Container, Item } from "../containers/Grids";
import { ShopNowButton } from "./Buttons";

export const Form = ({
  title,
  children,
  inputs,
  xs,
  sm,
  md,
  lg,
  xl,
  size,
  color,
  setValues,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {inputs.map((item, index) =>
        item.type !== "submit" ? (
          <Item
            xs={item.xs ? item.xs : xs ? xs : 12}
            sm={item.sm ? item.sm : sm ? sm : 12}
            md={item.md ? item.md : md ? md : 12}
            lg={item.lg ? item.lg : lg ? lg : 12}
            xl={item.xl ? item.xl : xl ? xl : 12}
            key={index}
          >
            <TextField
              placeholder={item.placeholder}
              key={item.name}
              fullWidth
              size={size}
              variant={item.variant}
              onChange={(e) => {
                setValues(e.target.value);
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
            style={{ height: item.height, width: item.width }}
            key={index}
          >
            <ShopNowButton key={item.name} style={item.style}>
              {item.title}
            </ShopNowButton>
          </Item>
        )
      )}
    </Container>
  );
};
