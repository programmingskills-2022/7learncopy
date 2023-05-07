import React from "react";
import classes from "./ArticleImage.module.css";
import Figure from "../../../general/Figure";
import author from "../../../images/author1.jpeg";
import { FaClock, FaFire } from "react-icons/fa";

const ArticleImage = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={classes.container}
    >
      <div className={classes.hero}>
        <div className={classes.articleInfo}>
          <Figure image={author} width="20px" responsiveWidth="20px" />
          <p>{props.author}</p>
        </div>
        <div className={classes.articleInfo}>
          <span className={classes.clock}>
            <FaClock />
          </span>
          <p>{props.peiod} دقیقه</p>
        </div>
        <div className={classes.articleInfo}>
          <span className={classes.fire}>
            <svg width="1em" height="1em">
              <linearGradient
                id="orange-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#ff4500" offset="0%" />
                <stop stopColor="#ffee00" offset="100%" />
              </linearGradient>

              <FaFire style={{ fill: "url(#orange-gradient)" }} />
            </svg>
          </span>
          <p>{props.seen}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleImage;
