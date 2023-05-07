import { useContext, useEffect, useState } from "react";
import classes from "./StarRating.module.css";
import { FaStar } from "react-icons/fa";
import GeneralContext from "../store/GeneralContext";

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const ctx = useContext(GeneralContext);

  ctx.onSetStarRating(rating);

  return (
    <div className={classes.starRating}>
      {[...Array(5)].map((star, index) => {
        index = 5 - index;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? classes.on : classes.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
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
