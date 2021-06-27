import React from "react";
import AboutLanding from "../components/AboutLanding";
import AboutUsHome from "../components/AboutUsHome";
import AboutUsMission from "../components/AboutMission";
import "./About.css";
import AboutWhy from "../components/AboutWhy";

export default function About() {
  return (
    <div>
      <AboutLanding />
      <AboutUsHome learnMore={false} />
      <AboutUsMission />
      <AboutWhy />
    </div>
  );
}
