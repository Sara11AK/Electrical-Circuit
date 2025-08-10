import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About </h1>
      <div className="about-text">
        <p>
          This site is designed to help beginners understand the fundamentals of
          electric circuits. 
          <br></br>
          Here, you'll find simple explanations of essential
          components, basic laws, theorems, and methods to analyze circuits with
          ease.
        </p>
        <p>
          Whether you're a student just starting out or someone curious about
          electronics, this site aims to make learning straightforward and
          practical.
        </p>
      </div>

      <div className="background-text">
        Electrical Circuits
      </div>
    </div>
  );
}

