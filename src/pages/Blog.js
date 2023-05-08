import React, { useContext, useEffect } from "react";
import classes from "./Blog.module.css";
import BlogHeader from "../components/blog/blogHeader/BlogHeader";
import BlogSearch from "../components/blog/BlogSearch";
import BlogContent from "../components/blog/blogContents/BlogContent";
import GeneralContext from "../store/GeneralContext";

const Blog = () => {
  const ctx = useContext(GeneralContext);
  useEffect(() => {
    ctx.onHideMenu();
  }, []);
  return (
    <div className={classes.blog}>
      <BlogHeader />
      <BlogSearch />
      <BlogContent />
    </div>
  );
};

export default Blog;
