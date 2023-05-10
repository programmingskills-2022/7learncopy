import React, { useContext, useState } from "react";
import classes from "./Menu.module.css";
import { FaCaretDown, FaCaretUp, FaRocket, FaSearch } from "react-icons/fa";
import Login from "./Login";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import CoursesMenu from "./home/courseMenu/CoursesMenu";
import { BiMenu } from "react-icons/bi";
import MenuRight from "./MenuRight";
import GeneralContext from "../store/GeneralContext";

const Menu = () => {
  const ctx = useContext(GeneralContext);

  return (
    <div className={classes.topContainer}>
      <ul className={classes.container}>
        <li className={classes.logo}>
          <figure className={classes.figure}>
            <Link to="/">
              <img className={classes.img} src={logo} alt="logo" />
            </Link>
          </figure>
          <button className={classes.img992} onClick={ctx.onShowMenu}>
            <BiMenu />
          </button>
        </li>
        <li className={classes.menuItem}>
          <button className={classes.courses}>
            دوره ها
            <FaCaretDown />
            <CoursesMenu hor={true} />
          </button>
        </li>
        <li className={classes.menuItem}>
          <Link to="blog">وبلاگ</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="books">کتابخانه</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="programmingAlphabet">
            <button className={classes.programmingAlphabet}>
              <FaRocket />
              دوره الفبای برنامه نویسی
            </button>
          </Link>
        </li>
      </ul>
      <div className={`${classes.container2}`}>
        <button className={classes.search}>
          <FaSearch />
        </button>
        <Login />
      </div>
      {ctx.showMenu && <MenuRight />}
    </div>
  );
};

export default Menu;
