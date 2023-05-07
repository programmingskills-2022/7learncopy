import React from "react";
import whatIsProgramming from "../../../images/whatIsProgramming.jpg";
import classes from "./BlogHeader.module.css";
import BlogHeaderItems from "./BlogHeaderItems";
import { FaPencilAlt } from "react-icons/fa";
import Card from "../../../general/Card";
import useWindowSize from "../../../general/general";

const BlogHeader = () => {
  const size = useWindowSize();
  let backgroundColor = "";
  let inHero = (
    <>
      <h2 className={classes.title}>
        برنامه نویسی چیست؟ + هرآن چیزی که باید از برنامه نویسی بدانید
      </h2>
      <div className={classes.articleInfo}>
        <div className={classes.subject}>
          <FaPencilAlt />
          <p>برنامه نویسی</p>
        </div>
        <p>13 بهمن 1401</p>
      </div>
    </>
  );
  let largeHero = <></>;
  let smallHero = <></>;
  if (size.width < 992) {
    backgroundColor = "#fff";
    smallHero = (
      <Card backgroundColor="#fff" width="100%">
        {inHero}
      </Card>
    );
  } else {
    largeHero = inHero;
  }
  return (
    <div className={classes.blogHeader}>
      <Card className={classes.card} backgroundColor={backgroundColor}>
        <div className={classes.container}>
          <div className={classes.hero}>{largeHero}</div>
        </div>
        {smallHero}
      </Card>

      <BlogHeaderItems />
    </div>
  );
};

export default BlogHeader;
