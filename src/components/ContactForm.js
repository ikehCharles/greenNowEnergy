import React from "react";
import { useState } from "react";
import { contact } from "../appCrendentials";
import TextField from "@material-ui/core/TextField";

export default function ContactForm() {
  const [formInputs, getFormInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const assignFormValues = (e, stateName) => {
    getFormInput((d) => {
      d[stateName] = e.target.value;
      return { ...d };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    console.log(formInputs);
    return false;
  };
  return (
    <div className="contact-form">
      <div className="contact-form-header">
        <h2>{contact.form.header.title}</h2>
        <p>{contact.form.header.body}</p>
      </div>
      <div className="contact-form-body">
        <form onSubmit={submitForm}>
          <div className="contact-form-body-input">
            {/* <label htmlFor="firstname">First Name</label> */}
            <TextField
              label="First Name"
              type="text"
              value={formInputs.firstname}
              onChange={(e) => assignFormValues(e, "firstname")}
            />
          </div>
          <div className="contact-form-body-input">
            {/* <label htmlFor="lastname">Last Name</label> */}
            <TextField
              label="Last Name"
              type="text"
              value={formInputs.lastname}
              onChange={(e) => assignFormValues(e, "lastname")}
            />
          </div>
          <div className="contact-form-body-input">
            {/* <label htmlFor="phone">Your Phone</label> */}
            <TextField
              label="Tel"
              type="tel"
              value={formInputs.phone}
              onChange={(e) => assignFormValues(e, "phone")}
            />
          </div>
          <div className="contact-form-body-input">
            {/* <label htmlFor="email">Your Email</label> */}
            <TextField
              label="Email"
              type="email"
              value={formInputs.email}
              onChange={(e) => assignFormValues(e, "email")}
            />
          </div>
          <div className="contact-form-body-input textarea">
            {/* <label htmlFor="message">Message</label> */}
            <TextField
              id="standard-multiline-flexible"
              label="Message"
              multiline
              rowsMax={4}
              value={formInputs.message}
              onChange={(e) => assignFormValues(e, "message")}
            />
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
