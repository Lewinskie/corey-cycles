import { TextField } from "@mui/material";

export const SearchInput = (props) => {
  return (
    <div style={{ width: props.width, height: props.height }}>
      <TextField type="text" placeholder="Search" fullWidth size={props.size} />
    </div>
  );
};
