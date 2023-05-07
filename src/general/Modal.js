import React, { useContext } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import GeneralContext from "../store/GeneralContext";

const BackDrop = () => {
  const ctx = useContext(GeneralContext);
  return <div className={classes.backDrop} onClick={ctx.onCommentHide} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};

const Modal = (props) => {
  const overlay = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, overlay)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        overlay
      )}
    </React.Fragment>
  );
};

export default Modal;
