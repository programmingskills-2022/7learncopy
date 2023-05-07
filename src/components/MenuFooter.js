import React from "react";
import classes from "./MenuFooter.module.css";
import { FaCaretDown, FaRocket, FaSearch } from "react-icons/fa";
import Login from "./Login";
import logo from "../images/logo-icon.svg";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaTwitter, FaLinkedin } from "react-icons/fa";
import sep from "../images/footer-sep.png";
import samandehi from "../images/footer-samandehi.png";
import nashr from "../images/footer-nashr.png";

const MenuFooter = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.menu}>
        <li>
          <figure className={classes.figure}>
            <Link to="/">
              <img className={classes.img} src={logo} alt="logo" />
            </Link>
          </figure>
        </li>
        <li>
          <Link to="blog">دوره های متخصص</Link>
        </li>
        <li>
          <Link to="blog">وبلاگ</Link>
        </li>
        <li>
          <Link to="books">درباره ما</Link>
        </li>
        <li>
          <Link to="books">قوانین و مقررات</Link>
        </li>
      </ul>
      <p className={classes.goal}>
        هدف مجموعه سون لرن افزایش سطح کیفیت آموزش و ساختن راهی برای ورود
        دانشجویان به بازار کار تخصصی است
      </p>
      <p className={classes.support}>
        :: سون لرن توسط سرورهای اختصاصی{" "}
        <a href="https://www.iranserver.com/" target="_blank">
          ایران سرور
        </a>{" "}
        پشتیبانی شده است.
      </p>
      <p className={classes.address}>
        :: تهران - منطقه 5 - بلوار اباذر - پیامبر شرقی - مجتمع گلشن - واحد 506
      </p>
      <div className={classes.info}>
        <div className={classes.info2}>
          <p>تلفن:</p>
          <p>۹۱۰۹۴۷۸۷-۰۲۱</p>
        </div>
        <div className={classes.info2}>
          <p>واتساپ:</p>
          <p>۰۹۰۳۲۱۴۹۳۷۷</p>
        </div>
        <div className={classes.info2}>
          <p> پشتیبانی تلگرام:</p>
          <p>sup_7Learn@</p>
        </div>
      </div>
      <div className={classes.social}>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaTelegram />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>
      <div className={classes.license}>
        <figure className={classes.licenseBox}>
          <img src={sep} alt="پرداخت الکترونیک" />
        </figure>
        <figure className={classes.licenseBox}>
          <img src={samandehi} alt="ساماندهی" />
        </figure>
        <figure className={classes.licenseBox}>
          <img src={nashr} alt="نشر" />
        </figure>
      </div>
    </div>
  );
};

export default MenuFooter;
