import React from "react";
import classes from "./BooksSearch.module.css";
import Input from "../../general/Input";
import { FaSearch } from "react-icons/fa";

const BooksSearch = () => {
  return (
    <form className={classes.searchForm}>
      <Input
        type="text"
        placeholder="عنوان کتاب را وارد کنید.... "
        width="100%"
        height="6vw"
        padding="0 1rem"
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default BooksSearch;
