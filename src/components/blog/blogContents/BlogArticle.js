import React from "react";
import Card from "../../../general/Card";
import classes from "./BlogArticle.module.css";
import { FaFire, FaPencilAlt } from "react-icons/fa";
import Figure from "../../../general/Figure";
import { Link } from "react-router-dom";

const BlogArticle = (props) => {
  const body = `${props.body.slice(0, 100)}...`;
  var jalaliDate = new Date(props.date).toLocaleDateString("fa-IR");

  return (
    <>
      <Link to={`${props.id}`}>
        <Card className={classes.blogArticle} hover2={true}>
          <Figure
            width="40%"
            responsiveWidth="100%"
            borderRadius="1rem"
            padding="1rem"
            boxShadow={false}
            image={props.image}
            alt="تصویر مقاله"
          />
          <div className={classes.articleInfo}>
            <h2 className={classes.title}>{props.subject}</h2>
            <p className={classes.description}>{body}</p>
            <div className={classes.download}>
              <div className={classes.downloadInfoRight}>
                <div className={classes.downloadInfoRight}>
                  <span className={classes.subject}>{<FaPencilAlt />}</span>
                  <p>{props.category}</p>
                </div>
                <div>
                  <p className={classes.dat}>{jalaliDate}</p>
                </div>
              </div>
              <div className={classes.downloadInfoLeft}>
                <p className={classes.see}>{props.seen}</p>
                <span>
                  <FaFire />
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default BlogArticle;
