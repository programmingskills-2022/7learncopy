import { useState } from "react";
import classes from "./DisplayStarRating.module.css";
import { FaStar } from "react-icons/fa";

export const DisplayStarRating = (props) => {
  const rating = props.index;
  return (
    <div className={classes.starRating}>
      {[...Array(5)].map((star, index) => {
        index = 5 - index;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? classes.on : classes.off}
          >
            <span className={classes.star}>
              <FaStar />
            </span>
          </button>
        );
      })}
    </div>
  );
};
