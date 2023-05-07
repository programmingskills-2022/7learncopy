import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import classes from "./DropDownList.module.css";
import { RxCaretDown } from "react-icons/rx";
import GeneralContext from "./../store/GeneralContext";

const DropDownList = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const ctx = useContext(GeneralContext);
  useEffect(() => {
    if (!ctx.lockDropDown) setShowDropDown((prevShowDropDown) => false);
  }, [ctx.lockDropDown]);

  const toggleDropDownHandle = () => {
    ctx.onLockDropDown(!ctx.lockDropDown);

    setShowDropDown((prevShowDropDown) => !prevShowDropDown);
  };

  return (
    <>
      <Card
        className={classes.DropDownList}
        backgroundColor="#eef3f3"
        width="80%"
        onClick={toggleDropDownHandle}
      >
        <p className={classes.title}>{props.title}</p>
        <span className={classes.svg}>
          <RxCaretDown />
        </span>
        {ctx.lockDropDown && showDropDown && props.dropDownList}
      </Card>
    </>
  );
};

export default DropDownList;
