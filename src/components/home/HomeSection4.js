import React from "react";
import human from "../../images/why-7learn-human.png";
import PageContent from "./../PageContent";
import classes from "./HomeSection4.module.css";
import WhyItems from "./WhyItems";
import { GiBackwardTime } from "react-icons/gi";
import { BiVideo, BiWebcam } from "react-icons/bi";
import { TbFileCertificate } from "react-icons/tb";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";

const HomeSection4 = (props) => {
  return (
    <div className={`${classes.container}`}>
      <div className={classes.backHuman}>
        <figure>
          <img src={human} alt="human-image" />
        </figure>
      </div>
      <div className={classes.content}>
        <div className={classes.right}>
          <figure className={classes.figure}>
            <img src={human} />
          </figure>
        </div>
        <div classNakme={classes.left}>
          <PageContent title="چرا باید سون لرن را انتخاب کنم؟">
            <WhyItems
              logo={<GiBackwardTime />}
              description="صرفه جویی در زمان، با تدریس اساتید مجرب"
            />
            <WhyItems
              logo={<BiVideo />}
              description="دریافت رایگان آپدیت دوره"
            />
            <WhyItems
              logo={<BiWebcam />}
              description="حفظ تعامل با برگزاری وبینارهای ماهانه"
            />
            <WhyItems
              logo={<RiFilePaper2Line />}
              description="ارزیابی و صدور گواهی آنلاین"
            />
            <WhyItems
              logo={<FaUserCheck />}
              description="معرفی به بازار کار پس از دریافت تاییدیه فنی"
            />
            <WhyItems
              logo={<TbFileCertificate />}
              description="گارانتی بازگشت وجه"
            />
          </PageContent>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
