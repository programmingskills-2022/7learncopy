import { createContext, useState } from "react";
import flutter from "../images/flutter.jpg";
import js from "../images/js.png";
import css from "../images/css.png";
import laravel from "../images/laravel.jpg";
import java from "../images/java.png";
import linux from "../images/linux.jpg";
import wordpress from "../images/wordpress.png";
import php from "../images/php.jpg";

const GeneralContext = createContext({
  showMenu: false,
  showCategories: false,
  lockDropDown: false,
  commentShow: false,
  starRating: 0,
  help: false,
  reply: { isReply: false, parentId: 0, isNew: true },
  onShowMenu: () => {},
  onHideMenu: () => {},
  onToggleCategories: () => {},
  onLockDropDown: () => {},
  onSetHelp: () => {},
  onCommentShow: () => {},
  onCommentHide: () => {},
  onSetStarRating: () => {},
  onSetIsReply: () => {},
  flutter,
  js,
  css,
  laravel,
  java,
  linux,
  wordpress,
  php,
});

export const GeneralContextProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [lockDropDown, setLockDropDown] = useState(false);
  const [help, setHelp] = useState(false);
  const [commentShow, setCommentShow] = useState(false);
  const [reply, setReply] = useState({ isReply: false, parentId: 0 });
  const [starRating, setStarRating] = useState(0);

  const showMenuHandle = () => {
    setShowMenu(true);
  };
  const hideMenuHandle = () => {
    setShowMenu(false);
  };

  const toggleCategoriesHandle = () => {
    if (showCategories) setShowCategories(false);
    else setShowCategories(true);
  };

  const lockDropDownHandle = (lock) => {
    setLockDropDown((prevLockDropDown) => lock);
  };

  const setHelpHandle = (handler) => {
    setHelp((prev) => handler);
  };

  /*this code is for insert and update comment/reply comment */

  const commentShowHandle = (isNew) => {
    setCommentShow(true);
    setReply({ isReply: false, parentId: 0, isNew });
  };

  /*this code is for insert and update comment/reply comment */

  const SetIsReplyHandle = (parentId, isNew) => {
    setCommentShow(true);
    if (!isNew)
      setReply({
        isReply: false,
        parentId,
        isNew,
      }); //if this comment must be editted?
    else setReply({ isReply: true, parentId, isNew }); // this comment is a reply comment
  };

  const commentHideHandle = () => {
    setCommentShow(false);
  };

  const setStarRatingHandle = (rate) => {
    setStarRating((prev) => rate);
  };

  return (
    <GeneralContext.Provider
      value={{
        showMenu,
        showCategories,
        lockDropDown,
        help,
        commentShow,
        starRating,
        reply,
        onShowMenu: showMenuHandle,
        onHideMenu: hideMenuHandle,
        onToggleCategories: toggleCategoriesHandle,
        onLockDropDown: lockDropDownHandle,
        onSetHelp: setHelpHandle,
        onCommentShow: commentShowHandle,
        onCommentHide: commentHideHandle,
        onSetStarRating: setStarRatingHandle,
        onSetIsReply: SetIsReplyHandle,
        flutter,
        js,
        css,
        laravel,
        java,
        linux,
        wordpress,
        php,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
