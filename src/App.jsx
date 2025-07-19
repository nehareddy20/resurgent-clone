import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;