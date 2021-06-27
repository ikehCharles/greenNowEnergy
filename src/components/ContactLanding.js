import React from "react";
import { contact } from "../appCrendentials";

export default function ContactLanding() {
  return (
    <div className="contact-landing">
      <div className="contact-landing-wrapper">
        <h3>{contact.title}</h3>
      </div>
    </div>
  );
}
