import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export const ShopNowButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
export const IconButtons = ({ children, title, ...rest }) => {
  return (
    <>
      {title === "Remove" ? (
        <IconButton {...rest}>
          <Remove />
        </IconButton>
      ) : (
        <IconButton {...rest}>
          <Add />
        </IconButton>
      )}
    </>
  );
};
