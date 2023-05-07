import React from "react";
import classes from "./HeaderImage.module.css";
import banner from "../images/site-top-banner-w6l.jpg";

const HeaderImage = () => {
  return (
    <div className={classes.headerImage}>
      <figure className={classes.figure}>
        <img src={banner} alt="banner" />
      </figure>
    </div>
  );
};

export default HeaderImage;
