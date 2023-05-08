/* 
  this component is used for insert new comment or reply comment page
*/
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../general/Modal";
import Card from "../../../general/Card";
import classes from "./SendComment.module.css";
import { FaTimes } from "react-icons/fa";
import Input from "../../../general/Input";
import Button from "../../../general/Button";
import GeneralContext from "../../../store/GeneralContext";
import { StarRating } from "../../../general/StarRating";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewComment,
  selectAllComments,
  selectCommentById,
  updateComment,
} from "../../../features/Comments";
import { useNavigate, useParams } from "react-router-dom";

const SendComment = (props) => {
  const [addNewRequest, setAddNewRequest] = useState("idle");
  const ctx = useContext(GeneralContext);
  const comments = useSelector(selectAllComments);

  const commentsSortById = comments.slice().sort((a, b) => a.id - b.id);

  const { articleId } = useParams();

  const rating = ctx.starRating;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const setNameHandle = (e) => setName(e.target.value);
  const setEmailHandle = (e) => setEmail(e.target.value);
  const setDescriptionHandle = (e) => setDescription(e.target.value);

  const canSave =
    [name, email, description].every(Boolean) && addNewRequest === "idle";
  const editedComment = useSelector((state) =>
    selectCommentById(state, ctx.reply.parentId)
  );

  useEffect(() => {
    // if comment must be updated?
    if (!ctx.reply.isNew) {
      setName(editedComment?.name);
      setEmail(editedComment?.email);
      setDescription(editedComment?.description);
    }
  }, []);

  const onSaveCommentClicked = (e) => {
    e.preventDefault();
    if (ctx.reply.isNew) {
      const arId = Number(articleId);

      const id =
        commentsSortById.length > 0
          ? commentsSortById[commentsSortById.length - 1].id + 1
          : 1;

      const commentDate = new Date().toISOString();

      const newComment = {
        parentId: ctx.reply.isReply ? ctx.reply.parentId : 0,
        id,
        articleId: arId,
        name,
        email,
        description,
        rate: rating,
        date: commentDate,
      };

      if (canSave)
        try {
          setAddNewRequest("pending");
          dispatch(addNewComment(newComment)).unwrap();
        } catch (err) {
          console.error("fail to save the comment", err);
        } finally {
          setAddNewRequest("idle");
        }
    } else {
      const arId = Number(articleId);
      const commentDate = new Date().toISOString();

      const editedComment = {
        parentId: 0,
        id: ctx.reply.parentId,
        articleId: arId,
        name,
        email,
        description,
        rate: rating,
        date: commentDate,
      };
      if (canSave)
        try {
          setAddNewRequest("pending");
          dispatch(updateComment(editedComment)).unwrap();
        } catch (err) {
          console.error("fail to update the comment", err);
        } finally {
          setAddNewRequest("idle");
        }
    }
    ctx.onCommentHide();
  };

  return (
    <Modal>
      <Card className={classes.card}>
        <div className={classes.header}>
          <h2>
            {!ctx.reply.isNew ? `ویرایش ` : `ارسال `}
            دیدگاه<span>&nbsp;</span>
            {ctx.reply.isNew && (ctx.reply?.isReply ? `در پاسخ به` : `جدید`)}
          </h2>
          <span className={classes.close} onClick={ctx.onCommentHide}>
            <FaTimes />
          </span>
        </div>
        <p>ما همه سوالات و دیدگاه ها رو می خونیم و پاسخ میدیم</p>
        <form className={classes.form}>
          <div className={classes.input}>
            <Input
              width="45%"
              type="text"
              placeholder="نام شما..."
              autoFocus={true}
              padding="0.5rem"
              value={name}
              onChange={setNameHandle}
              border="1px solid #dddbd8"
              borderRadius="10px"
            />

            <Input
              value={email}
              onChange={setEmailHandle}
              width="45%"
              type="text"
              placeholder="ایمیل شما..."
              padding="0.5rem"
              border="1px solid #dddbd8"
              borderRadius="10px"
            />
          </div>
          <Input
            value={description}
            onChange={setDescriptionHandle}
            width="100%"
            height="10rem"
            type="textarea"
            placeholder="دیدگاه خودت را برامون بنویس..."
            padding="0.5rem"
            border="1px solid #dddbd8"
            borderRadius="10px"
          />
          <div className={classes.footer}>
            <StarRating />
            <Button
              type="submit"
              width="100px"
              height="3vw"
              backgroundColor="#218bed"
              backgroundColorHover="#1f76c8"
              color="white"
              label="ارسال"
              onClick={onSaveCommentClicked}
              disabled={!canSave}
            />
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default SendComment;
