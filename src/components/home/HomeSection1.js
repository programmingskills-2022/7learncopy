import React from "react";
import headerHuman from "../../images/header-human.png";
import classes from "./HomeSection1.module.css";
import { FaCode, FaDesktop, FaUserGraduate, FaUsers } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import HomeSection1Info from "./HomeSection1Info";
import Button from "../../general/Button";

const HomeSection1 = (props) => {
  return (
    <div className={classes.homeSection1}>
      <div className={classes.homeSection1Right}>
        <p className={classes.title}> {props.title} </p>
        <p className={classes.infoContext}>
          سون لرن، برگزارکننده دوره‌های آموزشی آنلاین برنامه نویسی و طراحی وب و
          علم داده، با ۱۳ سال سابقه، از شروع یادگیری تا استخدام در بازار کار در
          کنار دانشجو است.
        </p>
        <div className={classes.infos}>
          <HomeSection1Info logo={<FaUserGraduate />} description="12 دوره" />
          <HomeSection1Info
            logo={<FaUserGraduate />}
            description="32000+ دقیقه آموزش"
          />
          <HomeSection1Info logo={<FaUsers />} description="113342 کاربر" />
          <HomeSection1Info logo={<IoLibrary />} description="453 مقاله" />
        </div>
        <div className={classes.buttons}>
          <Button
            type="button"
            width="150px"
            height="50px"
            backgroundColor="#007bec"
            backgroundColorHover="#0060ba"
            color="white"
            label="شروع یادگیری برنامه نویسی"
          />
          <Button
            type="button"
            width="120px"
            height="50px"
            backgroundColor="#1d2d3d"
            backgroundColorHover="#25394d"
            color="white"
            label="مشاوره تخصصی"
          />
        </div>
      </div>
      <div className={classes.homeSection1Images}>
        <div className={`${classes.box} ${classes.boxSvg} ${classes.boxSvg2}`}>
          <FaDesktop />
        </div>
        <div className={`${classes.box} ${classes.boxSvg} ${classes.boxSvg1}`}>
          <FaCode />
        </div>
        <div className={`${classes.box} ${classes.box1}`}>
          <figure className={classes.figure1}>
            <img
              className={classes.headerHuman}
              src={headerHuman}
              alt="header-human"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HomeSection1;
