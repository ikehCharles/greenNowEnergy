import React from "react";
import { about } from "../appCrendentials";

export default function AboutLanding() {
  return (
    <div className="about-landing">
      <div className="about-landing-wrapper">
        <h3>{about.title}</h3>
      </div>
    </div>
  );
}
