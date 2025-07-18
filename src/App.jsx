import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <Navbar />
      <Toggle theme={theme} setTheme={setTheme} />
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