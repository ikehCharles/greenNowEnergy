import React, { useEffect, useRef } from "react";
import { appTitle, appMenuList } from "../appCrendentials";
import { Link } from "react-router-dom";
import SideNav from "../subComponent/sideNav";

import "./Header.css";

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
  },
};

export default function Header() {
  const nav = useRef();
  useEffect(() => {
    let lastScrollTop = 0;
    window.onscroll = (e) => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
        nav.current.classList.add("showNavBackground");
        nav.current.classList.add("hideNav");
      } else {
        if (st < 5) {
          nav.current.classList.remove("showNavBackground");
        }
        // upscroll code
        nav.current.classList.remove("hideNav");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
  }, []);

  return (
    <>
      <nav ref={nav} className="header" style={styles.nav}>
        <div>
          <SideNav appTitle={appTitle} appMenuList={appMenuList} />
          <div className="web appTitle">
            <Link to="/">{appTitle}</Link>
          </div>
        </div>
        <ul className="web ">
          {appMenuList.length &&
            appMenuList.map((menuItem) => (
              <li key={menuItem.link}>
                <Link to={`/${menuItem.link}`}>{menuItem.title}</Link>
              </li>
            ))}
        </ul>
        <div className="mobile appTitle">
          <Link to="/">{appTitle}</Link>
        </div>
      </nav>
    </>
  );
}
