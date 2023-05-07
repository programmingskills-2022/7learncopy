import React from "react";
import classes from "./ContentTitle.module.css";

const ContentTitle = () => {
  return (
    <ul className={classes.contentTitle}>
      <li className={classes.title}>راهنمای مقاله و فهرست مطالب</li>
      <li className={classes.titles}>
        کودکان از چه سنی می‌توانند کدنویسی را شروع کنند؟
      </li>
      <li className={classes.titles}>فواید برنامه نویسی برای کودکان</li>
      <li className={classes.titles}>
        شروع یادگیری برنامه نویسی برای کودکان چگونه است؟
      </li>
      <li className={classes.titles}>بهترین زبان برنامه نویسی برای کودکان</li>
    </ul>
  );
};

export default ContentTitle;
