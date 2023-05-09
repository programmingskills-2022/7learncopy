import React from "react";
import classes from "./HomeSection2.module.css";
import Course from "./courseMenu/Course";
import java from "../../images/java.png";
import laravel from "../../images/laravel.jpg";
import php from "../../images/php.jpg";
import css from "../../images/css.png";
import android from "../../images/android.png";
import js from "../../images/js.png";
import wordpress from "../../images/wordpress.png";
import flutter from "../../images/flutter.png";
import linux from "../../images/linux.jpg";
import Button from "../../general/Button";

const HomeSection2 = (props) => {
  return (
    <div className={classes.section2Container}>
      <p className={classes.title2}> {props.title} </p>
      <div className={classes.section2}>
        <div className={classes.content}>
          <p className={classes.title}>
            بازار برای متخصص هاست و هیچ موقع بیکار نمی مونید
          </p>

          <div className={classes.courses}>
            <Course title="Java" description="آموزش جاوا" logo={java} />
            <Course
              title="Laravel"
              description="آموزش متخصص لاراول"
              logo={laravel}
            />
            <Course title="PHP" description="آموزش پی اچ پی" logo={php} />
            <Course
              title="Web Design"
              description="آموزش طراحی وب"
              logo={css}
            />
            <Course
              title="Android"
              description="آموزش اندروید"
              logo={android}
            />
            <Course
              title="JavaScript"
              description="آموزش جاوااسکریپت"
              logo={js}
            />
            <Course title="React" description="آموزش ریکت" logo={js} />
            <Course
              title="WordPress"
              description="آموزش وردپرس"
              logo={wordpress}
            />
            <Course title="NodeJS" description="آموزش نود جی اس" logo={js} />
            <Course title="Flutter" description="آموزش فلاتر" logo={flutter} />
            <Course title="Linux" description="آموزش لینوکس" logo={linux} />
          </div>
        </div>
        <Button
          type="button"
          width="15rem"
          height="4rem"
          backgroundColor="#007bec"
          backgroundColorHover="#0060ba"
          color="white"
          label="همه دوره های سون لرن"
        />
        {/* <div className={classes.shape}></div> */}
      </div>
    </div>
  );
};

export default HomeSection2;
