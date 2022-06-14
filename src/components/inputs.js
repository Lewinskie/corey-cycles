import { TextField } from "@mui/material";

export const SearchInput = (props) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        background: props.background,
        margin: props.margin,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
    >
      <TextField
        variant={props.variant}
        type="text"
        placeholder={props.placeholder}
        size={props.size}
        background={props.background}
        style={{ border: props.border, borderRadius: props.radius }}
      />
    </div>
  );
};
