import React from "react";
import Landing from "../components/Landing";
import AboutUsHome from "../components/AboutUsHome";
import ServicesHome from "../components/servicesHome";
import "./Home.css";
import ProjectHome from "../components/projectHome";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutUsHome learnMore={true} />
      {/* <ProductHome /> */}
      <ServicesHome />
      <ProjectHome />
      <Testimonial />
    </div>
  );
}
