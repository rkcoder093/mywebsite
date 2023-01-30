import "./App.css";

import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import About from "./Component/About";
import Education from "./Component/Education";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Internship from "./Component/Internship";
import Footer from "./Component/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About name="Ritik Kumar keshri " title_of_about="Summary" btn_name="Education" />
        <Education />
        <Internship />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}