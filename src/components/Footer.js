import React, { useEffect, useRef } from "react";
import {
  appTitle,
  appMenuList,
  appDescription,
  contact,
} from "../appCrendentials";
import { Link } from "react-router-dom";
import SideNav from "../subComponent/sideNav";

import "./Footer.css";
import Socials from "../subComponent/socials";

export default function Footer() {
  return (
    <>
      <nav className="footer">
        <div className="sections">
          <div className="first section">
            <div className="socials">
              <Socials />
            </div>
            <h2 className="appTitle">{appTitle}</h2>
            <p>{appDescription}</p>
          </div>
          <div className="second section">
            <h4>Quick Links</h4>
            <hr />
            <p className="links">
              {appMenuList.map((menu) => (
                <Link to={menu.link}>{menu.title}</Link>
              ))}
            </p>
          </div>
          <div className="third section">
            <h4>{contact.title}</h4>
            <hr />
            <p className="links">
              {contact.body.map((contact) => {
                if (contact.type === "email")
                  return (
                    <a href={`mailto:${contact.value}`}>{contact.value}</a>
                  );
                if (contact.type === "phone")
                  return <a href={`tel:${contact.value}`}>{contact.value}</a>;
                if (contact.type === "address") return <p>{contact.value}</p>;
              })}
            </p>
          </div>
        </div>
      </nav>
      <p
        style={{
          fontSize: 12,
          backgroundColor: " #222222",
          margin: 0,
          paddingBottom: 10,
          color: "white",
          textAlign: "center",
        }}
      >
        &copy;2021 {appTitle} All rights reserved
      </p>
    </>
  );
}
