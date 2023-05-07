import React from "react";
import BlogHeaderItem from "./BlogHeaderItem";
import classes from "./BlogHeaderItems.module.css";

const BlogHeaderItems = () => {
  return (
    <div className={classes.blogHeaderItems}>
      <BlogHeaderItem
        title="درامد برنامه نویسی در ایران چقدر است؟"
        subject="برنامه نویسی"
        date="30 مهر 1401"
      />
      <BlogHeaderItem
        title="آیا یادگیری برنامه نویسی نیاز به دانشگاه دارد؟"
        subject="آموزش"
        date="30 شهریور 1401"
      />
      <BlogHeaderItem
        title="برنامه نویسی را در چه سنی می توان شروع کرد؟"
        subject="برنامه نویسی"
        date="24 شهریور 1401"
      />
    </div>
  );
};

export default BlogHeaderItems;
