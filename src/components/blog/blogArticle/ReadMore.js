import React from "react";
import { MdMore } from "react-icons/md";
import Card from "../../../general/Card";
import classes from "./ReadMore.module.css";

const ReadMore = (props) => {
  return (
    <Card className={classes.card} backgroundColor="#fff" width="100%">
      <span>
        <MdMore />
      </span>
      <p className={classes.readMore}>بیشتر بخوانید:</p>
      <p className={classes.title}>{props.title}</p>
    </Card>
  );
};

export default ReadMore;
