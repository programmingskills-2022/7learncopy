import React from "react";
import classes from "./ArticleContext.module.css";
import kid1 from "../../../images/kid-programming01.jpg";
import Figure from "../../../general/Figure";
import Consultanting from "./Consultanting";
import ReadMore from "./ReadMore";
import BlogComments from "../blogComments/BlogComments";

const ArticleContext = (props) => {
  return (
    <div className={classes.articleContext}>
      <p>{props.body}</p>
      <h3>
        فرصت های بزرگ و درآمدهای عالی متعلق به متخصص هاست. برای متخصص شدن،
        مشاوره رایگان بگیر:
      </h3>
      <Consultanting />
      <section className={classes.readMore}>
        <ReadMore title="فریم ورک فلاتر (flutter) چیست و چه کاربردهایی دارد؟" />
        <ReadMore title="روش های کسب درآمد از برنامه نویسی اندروید" />
        <ReadMore title="برنامه نویسی اندروید چیست؟" />
      </section>
      <BlogComments articleId={props.articleId} />
    </div>
  );
};

export default ArticleContext;
