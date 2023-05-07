import React from "react";
import BlogCategories from "./BlogCategories";
import kidsProgramming from "./../../../images/kid-programming00-400x240.jpg";
import classes from "./BlogContent.module.css";
import BlogArticle from "./BlogArticle";
import BlogCategories2 from "./BlogCategories2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectAllArticles } from "../../../features/Articles";

const BlogContent = () => {
  const articles = useSelector(SelectAllArticles);
  return (
    <div className={classes.blogContent}>
      <div className={classes.articles}>
        <BlogCategories2 />
        <div className={classes.articleList}>
          {articles.map((article) => (
            <BlogArticle
              subject={article.subject}
              body={article.body}
              image={article.image}
              category={article.category}
              date={article.date}
              auther={article.auther}
              seen={article.seen}
              period={article.period}
              id={article.id}
            />
          ))}
        </div>
      </div>
      <div className={classes.BlogCategories}>
        <BlogCategories />
      </div>
    </div>
  );
};

export default BlogContent;
