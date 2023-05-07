import React from "react";
import classes from "./BlogCategories.module.css";
import Categories from "./Categories";

const BlogCategories = () => {
  return (
    <div className={classes.blogCategories}>
      <h3>دسته بندی مقالات</h3>
      <Categories />
    </div>
  );
};

export default BlogCategories;
