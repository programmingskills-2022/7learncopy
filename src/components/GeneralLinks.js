import React from "react";
import classes from "./GeneralLinks.module.css";

const GeneralLinks = (props) => {
  return (
    <div className={classes.generalLinks}>
      <div className={classes.logo}>{props.logo}</div>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
};

export default GeneralLinks;
