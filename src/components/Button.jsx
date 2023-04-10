import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Button = (props) => {
  return (
    <>
      <a href="#" className="btn">
        <p>{props.text}</p>
        <ArrowForwardIcon />
      </a>
    </>
  );
};

export default Button;
