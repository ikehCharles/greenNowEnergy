import React from "react";
import { project } from "../appCrendentials";

export default function ProjectLanding() {
  return (
    <div className="project-landing">
      <div className="project-landing-wrapper">
        <h3>{project.title}</h3>
      </div>
    </div>
  );
}
