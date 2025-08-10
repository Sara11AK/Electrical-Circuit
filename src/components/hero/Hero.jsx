import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "./hero.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">Electrical Circuits</div>
      <ul className="navbar-right">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#circuit-basics">Circuit Basics</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </nav>
  );
}

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: { x: "-220%", transition: { repeat: Infinity, repeatType: "mirror", duration: 20 } },
};

export default function Hero() {
  return (
    <div className="hero">
      <Navbar /> 

      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Circuits Made Simple</motion.h1>
          <motion.h2 variants={textVariants}>
            Built for students, by students.
            <br />
            Learn the basics of electrical circuits in a simple way.
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Electrical Circuits
      </motion.div>

      <div className="imageContainer">
        <img src="/Green.PNG" alt="Board" />
      </div>
    </div>
  );
}
