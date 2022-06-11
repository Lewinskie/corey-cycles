import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Links = (props) => {
  return (
    <Link
      to={props.to}
      style={{
        color: "#05386b",
        textDecoration: "none",
      }}
    >
      <Typography
        variant="body"
        style={{ fontWeight: "bold", fontSize: props.size }}
      >
        {props.title}
      </Typography>
    </Link>
  );
};
