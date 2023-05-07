import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      {props.type === "textarea" ? (
        <textarea
          placeholder={props.placeholder}
          autoFocus={props.autoFocus}
          value={props.value}
          onChange={props.onChange}
          style={{
            width: props.width,
            height: props.height,
            padding: props.padding,
            margin: props.margin,
            backgroundColor: props.backgroundColor,
            textAlign: props.textAlign,
            width: props.width,
            border: props.border,
            borderRadius: props.borderRadius,
          }}
        />
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          autoFocus={props.autoFocus}
          value={props.value}
          onChange={props.onChange}
          style={{
            width: props.width,
            height: props.height,
            padding: props.padding,
            margin: props.margin,
            backgroundColor: props.backgroundColor,
            textAlign: props.textAlign,
            width: props.width,
            border: props.border,
            borderRadius: props.borderRadius,
          }}
        />
      )}
    </>
  );
};

export default Input;
