import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { project } from "../appCrendentials";

export default function ProjectHome() {
  const flipCard = (e, param) => {
    if (param === "flipIn") {
      e.currentTarget.parentElement.parentElement.classList.add("flip");
    } else {
      e.currentTarget.parentElement.classList.remove("flip");
    }
  };
  return (
    <div className="projectHome">
      <div className="header">
        <h2>{project.title}</h2>
        <hr />
        <p>{project.summary}</p>
      </div>
      <div className="body">
        {project.body.map((project) => (
          <div key={project.title} className="project ">
            <div className="project-wrapper">
              <div className="img-wrapper">
                <img src={project.img} alt={project.title} />
              </div>
              <button onClick={(e) => flipCard(e, "flipOut")}>
                {/* <span style={{ marginRight: 10 }}>Flip</span> */}
                <i class=" heartbeat fas fa-long-arrow-alt-right"></i>
              </button>
              <div className="title">
                <div className="body">
                  <div className="header">
                    <h4>Project Title</h4>
                    <hr />
                  </div>
                  <p>{project.title}</p>
                  <div className="header">
                    <h4>Project Client</h4>
                    <hr />
                  </div>
                  <p>{project.testimonial.name}</p>
                </div>
                <button onClick={(e) => flipCard(e, "flipIn")}>
                  <i class=" heartbeat fas fa-long-arrow-alt-left"></i>
                  {/* <span style={{ marginLeft: 10 }}>Flip</span> */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
