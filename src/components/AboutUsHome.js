import React from "react";
import { Link } from "react-router-dom";
import { about } from "../appCrendentials";

export default function AboutUsHome({ learnMore }) {
  return (
    <div className="about-us-home">
      <div className="column-1">
        <h3>{about.header}</h3>
        <p>{about.intro}</p>
        {learnMore && (
          <Link to="/about">
            <button className="btn draw-border">{about.goToButtonText}</button>
          </Link>
        )}
      </div>
      <div className="column-2">
        <div className="about-img"></div>
      </div>
    </div>
  );
}
