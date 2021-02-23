import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made it through the wilderness. Somehow I made it through. Didn't know how lost I was until I found you.</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
