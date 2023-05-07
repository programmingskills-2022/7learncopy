import React, { useContext } from "react";
import { FaArrowDown, FaCaretDown, FaCarrot } from "react-icons/fa";
import classes from "./BlogCategories2.module.css";
import Card from "../../../general/Card";
import BlogCategories from "./BlogCategories";
import GeneralContext from "../../../store/GeneralContext";
import Categories from "./Categories";

const BlogCategories2 = () => {
  const ctx = useContext(GeneralContext);
  return (
    <Card
      className={classes.chooseCategories}
      width="100%"
      backgroundColor="#fff"
    >
      <button onClick={ctx.onToggleCategories}>
        <span>دسته بندی مقالات</span>
        <span>
          <FaCaretDown />
        </span>
      </button>
      {ctx.showCategories && <Categories />}
    </Card>
  );
};

export default BlogCategories2;
