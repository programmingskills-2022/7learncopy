import React, { useContext, useEffect, useState } from "react";
import classes from "./MenuRight.module.css";
import { IoClose } from "react-icons/io5";
import { FaCaretDown, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Courses from "./home/courseMenu/Courses";
import GeneralContext from "../store/GeneralContext";

const MenuRight = () => {
  const ctx = useContext(GeneralContext);
  return (
    <>
      {ctx.showMenu && (
        <div className={classes.menuRight}>
          <span className={classes.close} onClick={ctx.onHideMenu}>
            <IoClose />
          </span>
          <ul className={classes.container}>
            <li className={classes.coursesLi}>
              <div className={classes.coursesTitle}>
                <span>دوره ها</span>
                <FaCaretDown />
              </div>
              <div className={classes.courses}>
                <Courses />
              </div>
            </li>
            <li className={classes.otherLi}>
              <Link to="blog">وبلاگ</Link>
            </li>
            <li className={classes.otherLi}>
              <Link to="books">کتابخانه</Link>
            </li>
            <li className={classes.otherLi}>
              <Link to="programmingAlphabet">
                <button className={classes.programmingAlphabet}>
                  <FaRocket />
                  دوره الفبای برنامه نویسی
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuRight;
