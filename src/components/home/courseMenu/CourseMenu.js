import React, { useContext } from "react";
import classes from "./CourseMenu.module.css";
import GeneralContext from "../../../store/GeneralContext";
import Figure from "../../../general/Figure";
import useWindowSize from "../../../general/general";

const CourseMenu = (props) => {
  const ctx = useContext(GeneralContext);
  const size = useWindowSize();

  const courseMenuClass = size.width < 992 ? classes.paddingRight : "";
  return (
    <li className={`${classes.courseMenu} ${courseMenuClass}`}>
      <Figure image={props.logo} responsiveWidth="30px" width="40px" />
      <div>{props.courseName}</div>
    </li>
  );
};

export default CourseMenu;
