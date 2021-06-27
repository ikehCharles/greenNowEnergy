import React from "react";
import { contact } from "../appCrendentials";

export default function ContactQuick() {
  return (
    <div className="contact-quick">
      <div className="contact-quick-section1">
        <h2>{contact.quickContact.header}</h2>
        <p>{contact.quickContact.body}</p>
        <div>
          {contact.body.map((d) => (
            <div>
              <i className={d.icon}></i>
              <p>
                <p>{d.type}</p>
                <p>{d.value}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-quick-section2"></div>
    </div>
  );
}
