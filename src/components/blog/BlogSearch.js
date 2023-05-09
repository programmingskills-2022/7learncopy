import React from "react";
import classes from "./BlogSearch.module.css";
import Input from "../../general/Input";
import { FaSearch } from "react-icons/fa";

const BlogSearch = () => {
  return (
    <div className={classes.searchForm}>
      <button>
        <FaSearch />
      </button>
      <Input
        type="text"
        placeholder="جستجو در وبلاگ سون لرن ..."
        width="100%"
        height="max(6vw,50px)"
        padding="0 1rem"
      />
    </div>
  );
};

export default BlogSearch;
