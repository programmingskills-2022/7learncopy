import React, { useContext, useEffect } from "react";
import ArticleImage from "./ArticleImage";
import classes from "./Article.module.css";
import image from "../../../images/kid-programming00-400x240.jpg";
import ArticleContext from "./ArticleContext";
import ContentTitle from "./ContentTitle";
import GeneralContext from "../../../store/GeneralContext";
import ArticleTitle from "./ArticleTitle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectArticleById } from "../../../features/Articles";

const Article = () => {
  const ctx = useContext(GeneralContext);
  const { articleId } = useParams();
  const article = useSelector((state) =>
    SelectArticleById(state, Number(articleId))
  );

  return (
    <div
      className={classes.article}
      onClick={ctx.lockDropDown ? () => ctx.onLockDropDown(false) : undefined}
    >
      <div className={classes.header}>
        <ArticleImage
          image={article?.image}
          author={article?.author}
          period={article?.period}
          seen={article?.seen}
        />
        <ArticleTitle subject={article?.subject} category={article?.category} />
      </div>
      <div className={classes.content}>
        <ContentTitle />
        <ArticleContext body={article?.body} articleId={article?.id} />
      </div>
    </div>
  );
};

export default Article;
