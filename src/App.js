import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Hero />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
