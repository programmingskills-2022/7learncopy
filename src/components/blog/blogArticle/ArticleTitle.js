import React from "react";
import classes from "./ArticleTitle.module.css";

const ArticleTitle = (props) => {
  return (
    <div className={classes.articleTitle}>
      <p className={classes.title}>{props.subject} </p>
      <p>{`وبلاگ/ ${props.category}`}</p>
    </div>
  );
};

export default ArticleTitle;
