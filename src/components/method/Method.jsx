import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../CardProject"; 

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Method() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const projects = [
    {
      id: 1,
      Title: "Nodal Analysis",
      Description: (
        <>
          <p>
            A method to find unknown node voltages using Kirchhoff’s Current Law
            (KCL).
            <br />
            <br />
            Best for circuits with current sources and multiple nodes.
            <br />
            <br />
            Steps:
            <br />
            1. Identify all nodes
            <br />
            2. Label the currents
            <br />
            3. Apply Kirchhoff's current law (KCL)
            <br />
            4. Solve the equations.
          </p>
        </>
      ),
    },
    {
      id: 2,
      Title: "Mesh Analysis",
      Description: (
        <>
          <p>
            A method that uses Kirchhoff’s Voltage Law (KVL) to find unknown
            currents in closed loops (meshes).
            <br />
            <br />
            Used for circuits with multiple loops and unknown mesh currents.
            <br />
            <br />
            Steps:
            <br />
            1. Identify all meshes (independent loops)
            <br />
            2. Assign a current to each mesh.
            <br />
            3. Apply KVL to each mesh.
            <br />
            4. Form equations and solve for mesh currents.
            <br />
            5. Calculate voltages if needed.
          </p>
        </>
      ),
    },
    {
      id: 3,
      Title: "Superposition Theorem",
      Description: (
        <>
          <p>
            Analyze one independent source at a time, then add the effects.
            <br />
            <br />
            Circuits with multiple independent sources.
            <br />
            <br />
            Steps:
            <br />
            1. Keep one source, turn off others:
            <br />
             • Voltage source → short circuit
            <br />
            • Current source → open circuit
            <br />
            2.Find the desired current or voltage.
            <br />
            3.Repeat for all sources.
            <br />
            4. Add results algebraically.
          </p>
        </>
      ),
    },
    {
      id: 4,
      Title: " Source Transformation",
      Description: (
        <>
          <p>
            Changing a voltage source with series resistor into a current source
            with parallel resistor, and vice versa.
            <br />
            <br />
            To simplify circuits before analysis or to combine elements easily.
            <br />
            <br />
            Conversion steps:
            <br />
            • From Voltage Source:
            <br />
            𝑉 in series with 𝑅 To 𝐼 in parallel with 𝑅
            ⟶ 𝐼 = 𝑉/ 𝑅
            <br />
            • From a current source:
            <br />
            𝐼 in parallel with 𝑅 To 𝑉 in series with 𝑅
            ⟶ 𝑉 = 𝐼 𝑅
          </p>
        </>
      ),
    },
    {
      id: 5,
      Title: "Thevenin Equivalent",
      Description: (
        <>
          <p>
            Simplifies a circuit section to a single voltage source in series with
            one resistor.
            <br />
            <br />
            To analyze the load connected to a complex circuit.
            <br />
            <br />
            Steps:
            <br />
            1. Remove the load.
            <br />
            2. Find the open-circuit voltage → this is the Thevenin voltage.
            <br />
            3. Turn off all independent sources and find equivalent resistance →
            this is the Thevenin resistance.
            <br />
            4. The equivalent circuit: voltage source in series with a resistor.
          </p>
        </>
      ),
    },
    {
      id: 6,
      Title: "Norton’s Theorem",
      Description: (
        <>
          <p>
            Simplifies a circuit section to a current source in parallel with one
            resistor.
            <br />
            <br />
            Same as Thevenin, but in current source form.
            <br />
            <br />
            Steps:
            <br />
            1. Remove the load.
            <br />
            2. Find the short-circuit current → this is the Norton current.
            <br />
            3. Find equivalent resistance (same as Thevenin).
            <br />
            4. The equivalent circuit: current source in parallel with a resistor.
          </p>
        </>
      ),
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Method"
      style={{ minHeight: "80vh", color: "white" }}
    >
      <h2 className="sticky-title">Methods of Analysis and Circuit Theorems</h2>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "transparent", borderRadius: "20px" }}
        ></AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="card-grid">
            {projects.map((project) => (
              <CardProject
                key={project.id}
                Img={project.Img}
                Title={project.Title}
                Description={project.Description}
                id={project.id}
              />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
