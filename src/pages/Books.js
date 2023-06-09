import React, { useContext, useEffect } from "react";
import classes from "./Books.module.css";
import BooksHeader from "../components/books/BooksHeader";
import Book from "../components/books/Book";
import programmingBook from "./../images/programmingBook.jpg";
import pythonBook from "./../images/python.jpg";
import androidBook from "./../images/androidBook.jpg";
import GeneralContext from "../store/GeneralContext";

const Books = (color) => {
  const programming =
    "دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی";
  const python =
    "دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون دانلود رایگان کتاب مسیر یادگیری پایتون";
  const android =
    "نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندرویدنقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید نقشه راه برنامه نویسی اندروید";
  const ctx = useContext(GeneralContext);
  useEffect(() => {
    ctx.onHideMenu();
  }, []);

  return (
    <div className={classes.books}>
      <BooksHeader />
      <Book
        title="دانلود رایگان کتاب راهنمای ورود به مسیر برنامه نویسی"
        description={programming}
        bookName={programmingBook}
        subject="برنامه نویسی"
      />
      <Book
        title="دانلود رایگان کتاب مسیر یادگیری پایتون"
        description={python}
        bookName={pythonBook}
        subject="پایتون"
      />
      <Book
        title="نقشه راه برنامه نویسی اندروید + [pdf آموزشی]"
        description={android}
        bookName={androidBook}
        subject="اندروید"
      />
    </div>
  );
};

export default Books;
