import React from "react";
import classes from "./Course.module.css";

const Course = (props) => {
  return (
    <div className={classes.course}>
      <figure>
        <img src={props.logo} alt="logo" />
      </figure>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Course;
