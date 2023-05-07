import React from "react";
import PageContent from "./../PageContent";
import avatar from "../../images/avatar-1.jpg";
import classes from "./HomeSection3.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Figure from "../../general/Figure";

const HomeSection3 = (props) => {
  return (
    <div className={classes.homeSection3}>
      <div className={classes.content}>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.avatar}>
          <Figure image={avatar} alt={avatar} />
        </div>
        <p className={classes.teacher}>میلاد بسحاق | بک اند دولوپر در اسنپ</p>
        <p className={classes.gray}>دانشجوی دوره طراحی رابط کاربری</p>
        <p className={`${classes.academy} ${classes.gray}`}>
          این آکادمی با آموزش ها و استاد های خوب و حرفه‌ای تونسته دریچه جدید رو
          به دنیای بیرون باز کنه من از اول ورود به آکادمی تا الان تجربیات جالبی
          را به دست آوردم
        </p>
      </div>
      <div className={classes.shape}></div>
      <div class={classes.circle}>
        <span>
          <BsFillPlayFill />
        </span>
      </div>
      <div className={classes.arrows}>
        <div className={classes.box}>
          <FaGreaterThan />
        </div>
        <div className={classes.box}>
          <FaLessThan />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
