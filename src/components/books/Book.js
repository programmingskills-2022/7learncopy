import React from "react";
import Card from "../../general/Card";
import classes from "./Book.module.css";
import Figure from "../../general/Figure";
import { AiFillDownCircle } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const Book = (props) => {
  const description = `${props.description.slice(0, 100)}...`;
  return (
    <Card
      className={classes.book}
      hover1={true}
      backgroundColor="#fff"
      width="100%"
    >
      <Figure
        width={props.width}
        borderRadius="1rem"
        padding="1rem"
        boxShadow={true}
        image={props.bookName}
        alt={props.alt}
      />
      <div className={classes.bookInfo}>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.download}>
          <div className={classes.downloadInfoRight}>
            <span className={classes.subject}>{<AiFillDownCircle />}</span>
            <p>{props.subject}</p>
          </div>
          <div className={classes.downloadInfoLeft}>
            <p className={classes.see}>مشاهده و دانلود</p>
            <span className={classes.leftArrow}>
              <FaArrowLeft />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Book;
