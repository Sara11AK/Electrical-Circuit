import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Single from "./Single";
import "./laws.scss";

const items = [
  {
    id: 1,
    title: "Ohm's Law",
    img: "/ohm'slaw.png",
    desc: "• Ohm's Law states that the current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance.\n• Formula: V = I × 𝑅\n• Where V is voltage (volts), I is current (amperes), and 𝑅 is resistance (ohms).\n• This fundamental law is essential for analyzing electrical circuits."
  },
  {
    id: 2,
    title: "Nodes, Branches, and Loops",
    img: "/NODE.png",
    desc: "• Node: A point where two or more circuit elements connect.\n• Branch: A path connecting two nodes, containing one or more circuit elements.\n• Loop: A closed path in a circuit that starts and ends at the same node.\n• These concepts are fundamental for circuit analysis using Kirchhoff's laws."
  },
  {
    id: 3,
    title: "Kirchhoff's Laws",
    img: "/kvl.png",
    desc: "• Kirchhoff's Current Law (KCL): The sum of currents entering a node equals the sum of currents leaving the node.\n• Kirchhoff's Voltage Law (KVL): The sum of voltage drops around any closed loop equals zero.\n• These laws are based on conservation of charge and energy.\n• Essential tools for analyzing complex electrical circuits."
  },
  {
    id: 4,
    title: "Series Resistors and Voltage Division",
    img: "/Series.png",
    desc: "• In series circuits, resistors are connected end-to-end in a single path.\n• Total resistance: 𝑅_total = 𝑅₁ + 𝑅₂ + 𝑅₃ + ...\n• Current is the same through all resistors: 𝐼 = 𝑉_total  / 𝑅_total\n• Voltage division: 𝑉_n = (𝑅_n / 𝑅_total) × 𝑉_total\n• Used in applications like voltage dividers and sensor circuits."
  },
  {
    id: 5,
    title: "Parallel Resistors and Current Division",
    img: "/parallel.png",
    desc: "• In parallel circuits, resistors are connected across common points.\n• Total resistance: 1/𝑅_total = 1/𝑅₁ + 1/𝑅₂ + 1/𝑅₃ + ...\n• Voltage is the same across all resistors.\n• Current division: 𝐼_n = (𝑅_total /𝑅_n) × 𝐼_total\n• Used in applications requiring multiple paths for current flow."
  },
 
];

const Laws = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Laws" ref={ref}>
      <div className="progress">
        <h1>Basic Laws</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Laws;
