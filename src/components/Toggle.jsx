// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import About from "./About";
// import Services from "./Services";
// import Features from "./Features";
// import Contact from "./Contact";
// import Footer from "./Footer";
// // import Toggle from "./Toggle";
// // import "./App.css";

// function App() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return (
//     <div>
//       <Toggle theme={theme} setTheme={setTheme} />
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Features />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React from "react";

// Simple theme toggle button
function Toggle({ theme, setTheme }) {
  return (
    <button
      style={{
        margin: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        background: theme === "dark" ? "#161b22" : "#e6edf3",
        color: theme === "dark" ? "#e6edf3" : "#161b22",
        border: "1px solid #30363d",
        cursor: "pointer",
      }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

export default Toggle;