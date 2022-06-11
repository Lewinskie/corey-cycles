import { Button } from "@mui/material";

export const ShopNowButton = (props) => {
  return (
    <div
      style={{
        display: props.flex,
        alignItem: props.center,
        justifyContent: props.justify,
        alignItems: props.align,
      }}
    >
      <Button
        variant={props.variant}
        sx={{ color: props.color, backgroundColor: props.background }}
      >
        {props.title}
      </Button>
    </div>
  );
};
