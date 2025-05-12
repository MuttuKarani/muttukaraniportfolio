import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import ResumeViewer from "./components/ResumeViewer";

const MainLayout = () => (
  <>
    <NavigationBar />
    <div style={{ paddingTop: "60px" }}>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
