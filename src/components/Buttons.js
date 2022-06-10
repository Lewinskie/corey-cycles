import { Button } from "@mui/material";

export const ShopNowButton = (props) => {
  return (
    <div
      style={{
        display: props.flex,
        alignItem: props.center,
        justifyContent: props.center,
      }}
    >
      <Button variant={props.variant}>{props.title}</Button>
    </div>
  );
};
