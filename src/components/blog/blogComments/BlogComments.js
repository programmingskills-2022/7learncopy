/*
  this component is used for showing all comments
  note : <BlogComment> is showing each comment
*/

import React, { useContext, useEffect } from "react";
import Button from "../../../general/Button";
import classes from "./BlogComments.module.css";
import GeneralContext from "../../../store/GeneralContext";
import SendComment from "./SendComment";
import {
  selectCommentsByArticleId,
  getCommentsStatus,
  getCommentsError,
  fetchComments,
  selectAllComments,
} from "../../../features/Comments";

import { useDispatch, useSelector } from "react-redux";
import BlogComment from "./BlogComment";

const BlogComments = (props) => {
  const ctx = useContext(GeneralContext);
  const articleId = props.articleId;
  const dispatch = useDispatch();

  const comments = useSelector((state) =>
    selectCommentsByArticleId(state, articleId)
  );

  const commentsError = useSelector(getCommentsError);
  const commentsStatus = useSelector(getCommentsStatus);
  const commentNumber = comments?.length;

  useEffect(() => {
    if (commentsStatus === "idle") dispatch(fetchComments());
  }, [commentsStatus, dispatch]);

  let content = "";

  if (commentsStatus === "loading") content = <p>Loading...</p>;
  else if (commentsStatus === "succeeded") {
    const orderedComments = comments
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedComments.map((comment) => (
      <BlogComment comment={comment} />
    ));
  } else if (commentsStatus === "failed") content = <p>{commentsError}</p>;

  return (
    <div className={classes.comments}>
      <div className={classes.header}>
        <p>
          {commentNumber > 0
            ? `${commentNumber} دیدگاه`
            : `اولین بودن همیشه جذابه، همین الان اولین دیدگاه رو ثبت کن:`}
        </p>
        <Button
          type="button"
          width="100px"
          height="40px"
          backgroundColor="#218bed"
          backgroundColorHover="#1f76c8"
          color="white"
          label="ارسال دیدگاه"
          onClick={ctx.onCommentShow}
        />
      </div>
      {content}
      {ctx.commentShow && <SendComment />}
    </div>
  );
};

export default BlogComments;
