import React, { useContext } from "react";
import CourseMenu from "./CourseMenu";
import classes from "./CoursesMenu.module.css";
import GeneralContext from "../../../store/GeneralContext";

const CoursesMenu = (props) => {
  const ctx = useContext(GeneralContext);
  return (
    <div className={classes.coursesMenu}>
      <ul className={classes.courseColumn}>
        <CourseMenu
          hor={props.hor}
          logo={ctx.flutter}
          courseName="آموزش فلاتر"
        />
        <CourseMenu hor={props.hor} logo={ctx.js} courseName="آموزش NodeJS" />
        <CourseMenu
          hor={props.hor}
          logo={ctx.css}
          courseName="آموزش طراحی وب"
        />
        <CourseMenu
          hor={props.hor}
          logo={ctx.laravel}
          courseName="آموزش لاراول"
        />
      </ul>
      <ul className={classes.courseColumn}>
        <CourseMenu hor={props.hor} logo={ctx.js} courseName="آموزش React" />
        <CourseMenu hor={props.hor} logo={ctx.java} courseName="آموزش جاوا" />
        <CourseMenu
          hor={props.hor}
          logo={ctx.linux}
          courseName="آموزش لینوکس"
        />
        <CourseMenu
          hor={props.hor}
          logo={ctx.wordpress}
          courseName="آموزش وردپرس 1401"
        />
      </ul>
      <ul className={classes.courseColumn}>
        <CourseMenu hor={props.hor} logo={ctx.php} courseName="آموزش PHP" />
        <CourseMenu
          hor={props.hor}
          logo={ctx.js}
          courseName="آموزش جاوااسکریپت"
        />
      </ul>
    </div>
  );
};

export default CoursesMenu;
