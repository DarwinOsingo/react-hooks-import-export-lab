import React from "react";
import { image } from "../data/user";


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="user" />

    </div>
  );
}
export default About; // or Home, or About depending on the file

