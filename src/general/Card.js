import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const hoverClass1 = props.hover1 && classes.div;
  const hoverClass2 = props.hover2 && classes.div2;
  const classname = `${props.className} ${classes.card} ${hoverClass1} ${hoverClass2}`;

  return (
    <div
      style={{
        padding: props.padding,
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        border: props.border,
      }}
      className={classname}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
