import React from "react";
import classes from "./HomeSection1Info.module.css";

const HomeSection1Info = (props) => {
  return (
    <div className={classes.HomeSection1Info}>
      <span className={classes.logo}>{props.logo}</span>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default HomeSection1Info;
