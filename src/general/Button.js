import React, { useState } from "react";
import classes from "./Button.module.css";
import useWindowSize from "./general";

const Button = (props) => {
  const [bgColor, setBgColor] = useState(props.backgroundColor);
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        width: props.width,
        height: props.height,
        color: props.color,
        backgroundColor: bgColor,
      }}
      onMouseEnter={() => setBgColor(props.backgroundColorHover)}
      onMouseLeave={() => setBgColor(props.backgroundColor)}
      onKeyDown={() => setBgColor(props.backgroundColorHover)}
      onBlur={() => setBgColor(props.backgroundColor)}
    >
      {props.label}
    </button>
  );
};

export default Button;
