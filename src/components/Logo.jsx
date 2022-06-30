import React from "react";
import { ImageWrapper, Img } from "../containers/ImageWrapper";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <ImageWrapper
      style={{
        height: "100px",
        width: "100%",
      }}
    >
      <Link to="/">
        <Img
          src={props.image}
          alt={props.alt}
          style={{ height: "100%", objectFit: "contain" }}
        />
      </Link>
    </ImageWrapper>
  );
};

export default Logo;
