import Card from "../../../general/Card";
import { FaUserCircle, FaReply, FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import ReplyComment from "./ReplyComment";
import { DisplayStarRating } from "../../../general/DisplayStarRating";
import classes from "./BlogComment.module.css";
import TimeAgo from "../../../general/TimeAgo";
import { useContext, useState } from "react";
import GeneralContext from "../../../store/GeneralContext";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteComment,
  selectCommentsByParentId,
} from "../../../features/Comments";

const BlogComment = (props) => {
  const ctx = useContext(GeneralContext);
  const [deleteRequest, setDeleteRequest] = useState("idle");

  const setReplyHandle = (isNew) => {
    ctx.onSetIsReply(props.comment.id, isNew);
  };

  const replyComments = useSelector((state) =>
    selectCommentsByParentId(state, props.comment.id)
  );

  const orderedReplyComments = replyComments
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const dispatch = useDispatch();

  const deleteCommentHandle = () => {
    try {
      setDeleteRequest("pending");
      if (
        window.confirm(
          "آیا مطمئنید که نظر انتخاب شده با همه ی پاسخ های آن حذف شود؟"
        )
      ) {
        replyComments.forEach((replyComment) => {
          dispatch(deleteComment({ id: replyComment.id })).unwrap();
        });
        dispatch(deleteComment({ id: props.comment.id })).unwrap();
      }
    } catch (err) {
      console.error("failed to delete the comment", err);
    } finally {
      setDeleteRequest("idle");
    }
  };

  return (
    <Card className={classes.card} width="100%" backgroundColor="#fff">
      <div className={classes.commentHeader}>
        <div className={classes.commentH}>
          <span className={classes.userCircle}>
            <FaUserCircle />
          </span>
          <div className={classes.replyOperations}>
            <div className={classes.reply}>
              <button
                className={classes.replySvg}
                onClick={(e) => setReplyHandle(true)}
              >
                <FaReply />
              </button>

              <button
                className={classes.editSvg}
                onClick={(e) => setReplyHandle(false)}
              >
                <AiFillEdit />
              </button>

              <button className={classes.delSvg} onClick={deleteCommentHandle}>
                <FaTrash />
              </button>
            </div>

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
    </Card>
  );
};

export default BlogComment;
