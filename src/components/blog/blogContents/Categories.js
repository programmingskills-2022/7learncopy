import React from "react";
import classes from "./Categories.module.css";
const Categories = () => {
  return (
    <ul className={classes.categories}>
      <li>
        <a href="#">برنامه نویسی</a>
      </li>
      <li>
        <a href="#">دیجیتال مارکتینگ</a>
      </li>
      <li>
        <a href="#">شبکه و سخت افزار</a>
      </li>
      <li>
        <a href="#">علوم کامپیوتر و الگوریتم</a>
      </li>
      <li>
        <a href="#">مدیریت و رهبری</a>
      </li>
      <li>
        <a href="#">مهارت های نرم</a>
      </li>
      <li>
        <a href="#">نرم افزار</a>
      </li>
      <li>
        <a href="#">هوش مصنوعی</a>
      </li>
      <li>
        <a href="#">وبمستری و مدیریت سایت</a>
      </li>
    </ul>
  );
};

export default Categories;
