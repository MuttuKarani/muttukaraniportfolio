import React from "react";
import NavigationBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: "60px" }}>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
