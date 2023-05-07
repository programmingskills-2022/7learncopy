import React from "react";
import Card from "./Card";
import Input from "./Input";
import classes from "./LabelInInput.module.css";

const ConsultantingText = (props) => {
  return (
    <Card backgroundColor="#eef3f3" width="80%">
      <div className={classes.inputLable}>
        <label className={classes.label}>{props.label}</label>
        <div className={classes.input}>
          <Input
            placeholder={props.placeholder}
            padding="0.75rem"
            type="text"
            backgroundColor="#eef3f3"
            textAlign={props.textAlign}
            width={props.width}
          />
        </div>
      </div>
    </Card>
  );
};

export default ConsultantingText;
