import React from "react";
import ContactLanding from "../components/ContactLanding";
import ContactForm from "../components/ContactForm";
import ContactQuick from "../components/ContactQuick";
import "./Contact.css";

export default function Project() {
  return (
    <div>
      <ContactLanding />
      <ContactForm />
      <ContactQuick />
    </div>
  );
}
