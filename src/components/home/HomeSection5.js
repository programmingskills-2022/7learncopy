import React from "react";
import classes from "./HomeSection5.module.css";
import { IoLibrary } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaMicrophone } from "react-icons/fa";
import GeneralLinks from "./../GeneralLinks";

const HomeSection5 = (props) => {
  return (
    <div className={classes.section5}>
      <div className={classes.content}>
        <p className={classes.title2}>{props.title}</p>
        <p className={classes.title}>در همه مسیر کنار شما هستیم</p>
        <div className={classes.generalLinks}>
          <GeneralLinks title="کتاب" logo={<IoLibrary />} />
          <GeneralLinks title="وبلاگ" logo={<CgWebsite />} />
          <GeneralLinks title="پادکست" logo={<FaMicrophone />} />
          <GeneralLinks title="سوالات متداول" logo={<FaMicrophone />} />
        </div>
      </div>
      {/* <div className={classes.shape}></div> */}
    </div>
  );
};

export default HomeSection5;
