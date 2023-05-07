import React from "react";
import classes from "./PageContent.module.css";

const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <p className={classes.title}>{title}</p>
      {children}
    </div>
  );
};

export default PageContent;
