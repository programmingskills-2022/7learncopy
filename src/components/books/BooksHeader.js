import React from "react";
import classes from "./BooksHeader.module.css";
import blogBook from "./../../images/blog-book-page-header.svg";
import BooksSearch from "./BooksSearch";
import Figure from "../../general/Figure";

const BooksHeader = () => {
  return (
    <header className={classes.booksHeader}>
      <p className={classes.title}>
        کتاب های راهنمای ورود به دنیای برنامه نویسی
      </p>
      <p className={classes.description}>
        با کتاب های راهنمای مسیر یادگیری زبان های برنامه نویسی مختلف، بهترین
        مسیر رو برای خودت پیدا بکن
      </p>
      <Figure image={blogBook} alt="book image" padding="1rem" />
      <BooksSearch />
    </header>
  );
};

export default BooksHeader;
