import React from "react";
import { Link } from "react-router-dom";
import { about } from "../appCrendentials";

export default function AboutMision() {
  return (
    <div className="about-mission">
      <div className="about-mission-wrapper">
        <div className="about-mission-header">
          <h2>{about.mission.header}</h2>
          <div className="about-mission-item">
            <p>{about.mission.body1}</p>
            <p>{about.mission.body2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
