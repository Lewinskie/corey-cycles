import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

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
export const IconButtons = (props) => {
  return (
    <div>
      {props.title === "Remove" ? (
        <IconButton onClick={props.onClick}>
          <Remove />
        </IconButton>
      ) : (
        <IconButton onClick={props.onClick}>
          <Add />
        </IconButton>
      )}
    </div>
  );
};
