import React from "react";
import { Link } from "react-router-dom";
import { appCTA } from "../appCrendentials";
import CallSharpIcon from "@material-ui/icons/CallSharp";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landing-wrapper">
          <div className="landing-cta">
            <h1>
              {appCTA.main.text} <span>{appCTA.main.highlighted}</span>
            </h1>
            <h4>{appCTA.sub}</h4>
            {appCTA.buttons.map(({ title, link }) => (
              <button className="defaultBtn" key={link}>
                {link === "contact" ? <CallSharpIcon /> : ""}
                {link === "products" ? <ShoppingCartSharpIcon /> : ""}
                <Link to={link}>{title}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
