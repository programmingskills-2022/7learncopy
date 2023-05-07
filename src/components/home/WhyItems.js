import React from "react";
import classes from "./WhyItems.module.css";

const WhyItems = (props) => {
  return (
    <div className={classes.whyItems}>
      <div className={classes.logo}>{props.logo}</div>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default WhyItems;
