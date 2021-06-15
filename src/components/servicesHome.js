import React from "react";
import { Link } from "react-router-dom";
import { services } from "../appCrendentials";

export default function ServicesHome() {
  return (
    <div className="services-home">
      <div className="service-home-wrapper">
        <h2>{services.title}</h2>
        <hr />
        <p>{services.intro}</p>
        <div className="services-home-body">
          {services.body.map((service) => (
            <div className="services-home-body-service" key={service.title}>
              <div className="a-box">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <div className="text-container">
                  <h3>{service.title}</h3>
                  <div>{service.summary}</div>
                  <Link to={services.link}>
                    <button className="draw-border defaultBtn">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
