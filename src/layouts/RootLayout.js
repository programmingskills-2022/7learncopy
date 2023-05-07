import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";
import MenuFooter from "../components/MenuFooter";
import Nav from "../components/Nav";
import classes from "./RootLayout.module.css";
import { MdExpandLess } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const RootLayout = () => {
  const [jumpUpVisible, setJumpUpVisible] = useState(false);
  useEffect(() => {
    const scrollHandle = () => {
      const jumpTop = document.getElementById("jumpTop");
      const y = window.scrollY;
      if (y > 800) setJumpUpVisible(true);
      else setJumpUpVisible(false);
    };

    window.addEventListener("scroll", scrollHandle);
  });

  return (
    <>
      <a id="top"></a>
      {/* <HeaderImage /> */}
      <Nav />
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <MenuFooter />
      </footer>
      <a href="#top">
        <div
          id="jumpTop"
          className={
            jumpUpVisible
              ? `${classes.jumpTop} ${classes.show}`
              : `${classes.jumpTop} ${classes.hide}`
          }
        >
          <MdExpandLess />
        </div>
      </a>

      <div className={classes.bell} data-tooltip="مشترک شوید">
        <div className={classes.bellBox}></div>
        <FaBell />
      </div>
    </>
  );
};

export default RootLayout;

// export const rootLoader= () =>{

// }
