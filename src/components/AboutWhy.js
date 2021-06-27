import React from "react";
import { Link } from "react-router-dom";
import { about } from "../appCrendentials";

export default function AboutWhy() {
  return (
    <div className="about-why">
      <div className="about-why-wrapper">
        <div className="about-why-header">
          <h2>{about.standards.header}</h2>
          <p>{about.standards.intro}</p>
        </div>
        <div className="about-why-body">
          {about.standards.body.map((d) => (
            <div className="about-why-body-item">
              <p className="about-why-body-item-icon">
                <i className={d.icon}></i>
              </p>
              <div>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
