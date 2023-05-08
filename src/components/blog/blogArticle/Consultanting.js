import React, { useState } from "react";
import classes from "./Consultanting.module.css";
import Card from "../../../general/Card";
import logo from "../../../images/logo.svg";
import Figure from "../../../general/Figure";
import LabelInInput from "../../../general/LabelInInput";
import DropDownList from "../../../general/DropDownList";
import Button from "../../../general/Button";

const Consultanting = () => {
  const [time, setTime] = useState("time1");

  const changeTimeHandle = (e) => setTime(e.target.value);

  return (
    <Card width="100%" backgroundColor="#acd3f4">
      <form
        className={classes.Consultanting}
        onSubmit={(e) => e.preventDefault()}
      >
        <Figure image={logo} width="100px" responsiveWidth="100px" />
        <h3>مشاوره رایگان‌ کوبرنتیز</h3>
        <LabelInInput
          placeholder="مثلا: لقمان آوند"
          label="نام شما"
          width="100%"
        />
        <LabelInInput
          placeholder="091xxxxxxxx"
          label="شماره موبایل"
          textAlign="left"
          width="100%"
        />
        <LabelInInput
          placeholder="yourName@domain.com"
          label="ایمیل شما"
          textAlign="left"
          width="100%"
        />
        <DropDownList
          title="برنامه نویسی رو در چه سطحی بلدی؟"
          dropDownList={
            <ul className={classes.level}>
              <li>برنامه نویسی رو در چه سطحی بلدی؟</li>
              <li>اصلا کار نکردم و صفر هستم</li>
              <li>در سطح مبتدی هستم</li>
              <li>در حد خوبی کار کردم و سطح متوسط دارم</li>
              <li>کاملا حرفه ای و با تجربه هستم</li>
            </ul>
          }
        />
        <DropDownList
          title="هدفت از یادگیری این مهارت چیه؟"
          dropDownList={
            <ul className={classes.level}>
              <li>هدفت از یادگیری این مهارت چیه؟</li>
              <li>هدف دورکاری و فریلنسری دارم</li>
              <li>هدف استخدام شدن در شرکت های نرم افزاری را دارم</li>
              <li>هدف راه اندازی استارت آپ یا کسب و کار شخصی خود را دارم</li>
            </ul>
          }
        />
        <div className={classes.contact}>
          <label className={classes.label}>چه ساعتی با شما تماس بگیرم؟</label>
          <div className={classes.radios}>
            <div className={classes.radio}>
              <input
                id="time1"
                name="time"
                type="radio"
                value="time1"
                checked={time === "time1"}
                onChange={changeTimeHandle}
              />
              <label htmlFor="time1">10 تا 13</label>
            </div>
            <div className={classes.radio}>
              <input
                id="time2"
                name="time"
                type="radio"
                value="time2"
                checked={time === "time2"}
                onChange={changeTimeHandle}
              />
              <label htmlFor="time2">13 تا 15</label>
            </div>
            <div className={classes.radio}>
              <input
                id="time3"
                name="time"
                type="radio"
                value="time3"
                checked={time === "time3"}
                onChange={changeTimeHandle}
              />
              <label htmlFor="time3">15 تا 17</label>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          width="80%"
          height="40px"
          color="white"
          label="ثبت درخواست"
          backgroundColor="#2a4159"
          backgroundColorHover="#1d2d3d"
        />
      </form>
    </Card>
  );
};

export default Consultanting;
