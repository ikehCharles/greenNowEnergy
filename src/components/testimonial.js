import React from "react";
import { project } from "../appCrendentials";
import { Avatar, fullname } from "react-lorem-ipsum";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="header">
        <h2>Testimonials</h2>
        <hr />
      </div>
      <div className="body">
        {project.body.slice(0, 3).map((project) => (
          <div key={project.testimonial.name} className="item">
            <div className="img-wrapper">
              <Avatar className="img" alt="random images" />
            </div>
            <div classname="details">
              <h4>{fullname()}</h4>
              <h3>{project.testimonial.work}</h3>
            </div>
            <div className="quote">
              <p className="left quotesign">
                <i class="fas fa-quote-left"></i>
              </p>
              <p className="right quotesign">
                <i class="fas fa-quote-right"></i>
              </p>
              <p className="quotetext">{project.testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
