import React from "react";
import classes from "./Login.module.css";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className={classes.container}>
      <button className={`${classes.login} ${classes.button}`}>ورود</button>
      <button className={`${classes.register} ${classes.button}`}>عضویت</button>
      <div className={classes.user}>
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Login;
