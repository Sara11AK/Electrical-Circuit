import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Concepts from "./components/Concepts/Concepts";
import Method from "./components/method/Method";
import BookInfo from "./components/BookInfo/BookInfo";
import Laws from "./components/Laws/Laws";


const LandingPage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="circuit-basics">
        <Concepts />
      </section>     
       <Laws />
      <Method />
        <section id="contact">
        <BookInfo />
              </section>

    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
