import Card from "../../../general/Card";
import { FaUserCircle, FaReply } from "react-icons/fa";
import ReplyComment from "./ReplyComment";
import { DisplayStarRating } from "../../../general/DisplayStarRating";
import classes from "./BlogComment.module.css";
import TimeAgo from "../../../general/TimeAgo";
import { useContext } from "react";
import GeneralContext from "../../../store/GeneralContext";
import { useSelector } from "react-redux";
import { selectCommentsByParentId } from "../../../features/Comments";

const BlogComment = (props) => {
  const ctx = useContext(GeneralContext);

  const setReplyHandle = () => {
    ctx.onSetIsReply(props.comment.id);
  };

  const replyComments = useSelector((state) =>
    selectCommentsByParentId(state, props.comment.id)
  );

  const orderedReplyComments = replyComments
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Card className={classes.card} width="100%" backgroundColor="#fff">
      <div className={classes.commentHeader}>
        <div className={classes.commentH}>
          <span className={classes.userCircle}>
            <FaUserCircle />
          </span>
          <div className={classes.reply}>
            <button className={classes.replySvg} onClick={setReplyHandle}>
              <FaReply />
            </button>
            <p>
              <TimeAgo timestamp={props.comment.date} />
            </p>
          </div>
        </div>
        <DisplayStarRating index={props.comment.rate} />
      </div>
      <p className={classes.comment}>{props.comment.description}</p>

      {orderedReplyComments.map((replyComment) => (
        <ReplyComment
          date={replyComment.date}
          author={replyComment.name}
          comment={replyComment.description}
        />
      ))}
      {/* <ReplyComment
        date="10 اردیبهشت 1402"
        author="نازنین کریمی مقدم"
        comment="درود
خوشحالیم که مقاله براتون مفید بوده.
معمولا افرادی که به پازل علاقه مند هستند برنامه نویسی رو هم دوست خواهند داشت اما در کل در کودکی یکم این تشخیص سخت هست چون کودک یک روحیه تنوع طلبی قوی رو در خودش داره و از اون سمت خودش هم دقیق نمیدونه که دقیقا چه چیزی رو دوست داره تا شخصیتش شکل بگیره.
بهترین کار اینه که کار با اسکرچ رو شروع کنه. اسکرچ یچیزی بین برنامه نویسی و پازله، کار باهاش خیلی ساده هست و هیچ پیش زمینه ای هم نمیخواد. اگر با اسکرچ ارتباط خوبی برقرار کرد یعنی برنامه نویسی رو هم دوست خواهد داشت."
      /> */}
    </Card>
  );
};

export default BlogComment;
