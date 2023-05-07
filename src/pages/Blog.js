import React from "react";
import classes from "./Blog.module.css";
import BlogHeader from "../components/blog/blogHeader/BlogHeader";
import BlogSearch from "../components/blog/BlogSearch";
import BlogContent from "../components/blog/blogContents/BlogContent";

const Blog = () => {
  return (
    <div className={classes.blog}>
      <BlogHeader />
      <BlogSearch />
      <BlogContent />
    </div>
  );
};

export default Blog;
