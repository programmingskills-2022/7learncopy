import React from "react";
import classes from "./ReplyComment.module.css";
import Card from "../../../general/Card";
import { FaUserCircle, FaReply } from "react-icons/fa";
import TimeAgo from "../../../general/TimeAgo";

const ReplyComment = (props) => {
  return (
    <Card
      className={classes.card}
      width="100%"
      backgroundColor="#eef3f3"
      border="1px solid #218bed"
    >
      <div className={classes.commentH}>
        <span className={classes.userCircle}>
          <FaUserCircle />
        </span>
        <div className={classes.reply}>
          <p className={classes.author}>{props.author}</p>
          <p>
            <TimeAgo timestamp={props.date} />
          </p>
        </div>
      </div>
      <p>{props.comment}</p>
    </Card>
  );
};

export default ReplyComment;
