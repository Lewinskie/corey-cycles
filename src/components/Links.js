import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Links = (props) => {
  return (
    <Link
      to={props.to}
      style={{
        color: props.color,
        textDecoration: props.decoration,
      }}
    >
      <Typography
        variant="body"
        style={{ fontWeight: props.weight, fontSize: props.size }}
      >
        {props.title}
      </Typography>
    </Link>
  );
};
