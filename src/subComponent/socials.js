import React from "react";
import { appSocials } from "../appCrendentials";

export default function Socials() {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {appSocials.map((social) => (
        <li key={social.title}>
          <a href={social.link}>
            <i className={social.faIcons}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
