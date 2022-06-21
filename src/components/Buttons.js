import { Button } from "@mui/material";

export const ShopNowButton = (props) => {
  return (
    <div
      style={{
        display: props.flex,
        alignItem: props.center,
        justifyContent: props.justify,
        alignItems: props.align,
        margin: props.margin,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        width: props.width,
      }}
    >
      <Button
        variant={props.variant}
        sx={{
          color: props.color,
          backgroundColor: props.background,
          width: props.width,
          height: props.height,
        }}
        size={props.size}
        onClick={props.onClick}
        type={props.type}
      >
        {props.title}
      </Button>
    </div>
  );
};
