import React, { useEffect, useState } from "react";
import classes from "./BlogHeaderItem.module.css";
import Card from "../../../general/Card";
import useWindowSize from "../../../general/general";

const BlogHeaderItem = (props) => {
  const size = useWindowSize();
  const backgroundColor = size.width < 992 ? "#fff" : "";

  return (
    <Card
      className={classes.blogHeaderItem}
      backgroundColor={backgroundColor}
      width="100%"
    >
      <h2>{props.title}</h2>
      <div className={classes.SubjectDate}>
        <p>{props.subject}</p>
        <p>{props.date}</p>
      </div>
    </Card>
  );
};

export default BlogHeaderItem;
