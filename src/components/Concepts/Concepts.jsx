import { useRef } from "react";
import "./concepts.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Concepts = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="Concepts"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Basic <motion.b whileHover={{ color: "purple" }}>Electrical</motion.b>
          <br/>
            <motion.b whileHover={{ color: "purple" }}>Circuits</motion.b> Concepts.
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box horizontal box-charge" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Electric Charges</h2>
            <p>
           • Charge is an electrical property of the atomic
           particles of which matter consists, measured in
           coulombs (C).
           <br />
           • The charge e on one electron is negative and equal in magnitude to 1.602 x 10^-19 C which is called as electronic charge. The charges that occur in nature are integral multiples of the electronic charge.
         </p>
        </motion.div>

        <motion.div className="box horizontal box-current" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Current</h2>
          <p>
           •  Current is the rate at which electric charge flows through a conductor and is measured in amperes (A).
           <br />
           • i = dq/dt.
           <br />
           •	A direct current (dc) is a current that remains constant with time.
           <br />
           •	An alternating current (ac)  is a current that varies sinusoidally with time. 
         </p>
        </motion.div>

        <motion.div className="box horizontal box-voltage" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Voltage</h2>
          <p>
            •	Voltage  is the energy required to move a unit charge through an element, measured in volts (V).
            <br/>
            •	v= dw/dq
            <br/>
            w is energy in joules (J) and q is charge in coulomb (C).
            <br/>
            •	Electric voltage, is always across the circuit element or between two points in a circuit.
          </p>
        </motion.div>

        <motion.div className="box horizontal box-power" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Power and Energy</h2>
          <p>
           •  Power is the time rate of expending or absorbing energy, measured in watts (W).
            <br/>
           •	P= V*I
            <br/>
           •  Energy is the capacity to do work, measured in joules (J).
            <br/>
           • W =V *I *t
         </p>
        </motion.div>

        <motion.div className="box horizontal box-passive" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Passive Elements</h2>
          <p>
           • Do not generate energy, only consume or store it.
           <br/>
           • Examples:
           <br/>
            &nbsp; Resistors: dissipate energy as heat.
           <br/>
           &nbsp; Capacitors: store energy as electric field.
           <br/>
           &nbsp; Inductors: store energy as magnetic field.
          </p>
          <div className="icons">
            <img src="/resistor.png" className="icon1" />
            <img src="/Capacitor.PNG" className="icon1" />
            <img src="/inductor.png" className="icon1" />
          </div>
        </motion.div>

        <motion.div className="box horizontal box-active" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Active Elements</h2>
           <p>
           • Capable of generating or supplying energy
            <br/>
           • Examples:
           <br/>
           Voltage sources:
           An ideal voltage source is a circuit element that will maintain the specified voltage V<sub>s</sub> across its terminals.
           The current will be determined by other circuit elements.
           <br/>
           Current sources:
           An ideal current source is a circuit element that maintains the specified current flow i<sub>s</sub> through its terminals.
           The voltage is determined by other circuit elements.
          </p>
        </motion.div>

        <motion.div className="box horizontal box-independent" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Independent Sources</h2>
          <p>
           • Provide voltage or current without relying on other elements.
           <br/>
           • Types:
           <br/>
           Independent voltage source → gives a fixed voltage
           <br/>
           Independent current source → gives a fixed current
         </p>
          <img src="/vc.png" className="icon2" />
        </motion.div>

        <motion.div className="box horizontal box-dependent" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Dependent  Sources</h2>
           <p>
           Their output depends on another variable in the circuit .
           <br/>
           Types:
           <br/>
           Voltage-Controlled Voltage Source (VCVS)
           <br/>
           Current-Controlled Voltage Source (CCVS)
           <br/>
           Voltage-Controlled Current Source (VCCS)
           <br/>
           Current-Controlled Current Source (CCCS)
          </p>
          <img src="/iv.png" className="icon3" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Concepts;
