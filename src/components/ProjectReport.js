import React from "react";
import { project } from "../appCrendentials";
import { Avatar, fullname } from "react-lorem-ipsum";

export default function ProjectReport() {
  return (
    <>
      <h3
        style={{
          marginTop: 40,
          marginBottom: 0,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Featured Projects
      </h3>
      <hr style={{ borderBottom: "1px solid black", marginBottom: 40 }} />
      <div className="project-report">
        {project.body.map((d, key) => (
          <div className="project-report-item" key={key}>
            <div className="project-item-column1">
              <div className="project-report-img-wrapper">
                <img src={d.img} alt={d.title} srcset="" />
              </div>
              <div className="project-item-detail">
                <h4>Project Title</h4>
                <p>{d.title}</p>
                <h4>Project Summary</h4>
                <p>{d.summary}</p>
              </div>
            </div>
            <div className="project-item-column2">
              <div className="project-item-user">
                <div className="project-report-user-img-wrapper">
                  <Avatar className="img" alt="random images" />
                </div>
                <div className="project-item-user-detail">
                  <p className="project-item-user-work">{d.testimonial.work}</p>
                  <p>{fullname()}</p>
                </div>
              </div>
              <div className="project-item-testimonial">
                <small>Testimonial</small>
                <p>{d.testimonial.testimony}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
