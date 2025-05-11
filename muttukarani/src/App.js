import React from "react";
import NavigationBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ paddingTop: "75px" }}>
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
