import React from "react";
import { contact } from "../appCrendentials";

export default function ContactQuick(props) {
  return (
    <div className="contact-quick">
      <div className="contact-quick-section1">
        <h2>{contact.quickContact.header}</h2>
        <p>{contact.quickContact.body}</p>
        <div>
          {contact.body.map((d, key) => (
            <div className="contact-quick-details" key={key}>
              <p>
                <p className="contact-quick-details-type">
                  <i className={d.icon}></i>
                  <span>{d.type}</span>
                </p>
                <p className="contact-quick-details-value">{d.value}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
