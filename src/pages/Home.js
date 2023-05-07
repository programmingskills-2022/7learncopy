import React from "react";
import classes from "./Home.module.css";
import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";
import { FaBell } from "react-icons/fa";

const Home = () => {
  return (
    <div className={classes.home}>
      <HomeSection1 title="آموزش برنامه نویسی با سون لرن" />
      <HomeSection2 title="در چه حوزه ای می خواهی متخصص بشی؟" />
      <HomeSection3 title="نظرات دانشجویان" />
      <HomeSection4 title="چرا باید سون لرن رو انتخاب کنم؟" />
      <HomeSection5 title="رایگان آموزش ببینید" />
    </div>
  );
};

export default Home;
