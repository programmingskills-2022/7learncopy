import React from "react";
import classes from "./Figure.module.css";
import useWindowSize from "./general";

const Figure = (props) => {
  const boxShadow = props.boxShadow && classes.boxShadow;
  const figureClass = (props.hover && classes.blur) || classes.fig;
  const size = useWindowSize();
  const responsiveWidth =
    size.width < 1200 ? props.responsiveWidth : props.width;
  return (
    <figure
      style={{ padding: props.padding, width: responsiveWidth }}
      className={figureClass}
    >
      <img
        className={boxShadow}
        style={{
          width: "100%",
          margin: props.margin,
        }}
        src={props.image}
        alt={props.alt}
      />
    </figure>
  );
};

export default Figure;
