import React, { useContext } from "react";
import CourseMenu from "./CourseMenu";
import classes from "./Courses.module.css";
import GeneralContext from "../../../store/GeneralContext";

const Courses = () => {
  const ctx = useContext(GeneralContext);
  return (
    <ul className={classes.courseColumn}>
      <CourseMenu hor={false} logo={ctx.flutter} courseName="آموزش فلاتر" />
      <CourseMenu hor={false} logo={ctx.js} courseName="آموزش NodeJS" />
      <CourseMenu hor={false} logo={ctx.css} courseName="آموزش طراحی وب" />
      <CourseMenu hor={false} logo={ctx.laravel} courseName="آموزش لاراول" />
      <CourseMenu hor={false} logo={ctx.js} courseName="آموزش React" />
      <CourseMenu hor={false} logo={ctx.java} courseName="آموزش جاوا" />
      <CourseMenu hor={false} logo={ctx.linux} courseName="آموزش لینوکس" />
      <CourseMenu
        hor={false}
        logo={ctx.wordpress}
        courseName="آموزش وردپرس 1401"
      />
      <CourseMenu hor={false} logo={ctx.php} courseName="آموزش PHP" />
      <CourseMenu hor={false} logo={ctx.js} courseName="آموزش جاوااسکریپت" />
    </ul>
  );
};

export default Courses;
