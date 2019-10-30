import React, { Component } from "react";
import todo from "../img/todo.png";
import "../App.css";
import HTML5 from "../img/html5.svg";
import CSS3 from "../img/CSS3.svg";
import JS from "../img/JS.svg";
import NODE from "../img/node.svg";
import REACT from "../img/react.svg";





class Portfolio extends Component {
  state = {};
  render() {
    return (
      <main id="main">
       <div className="container">
  
  <div className="projectcontainer">
    <div className="projectview">Preview</div>
    <div className="projectdesign">
    <div className="skills_projects">
                <div id="skill" className="skills_projects">
                  <img className="skills" src={HTML5} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={CSS3} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={JS} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={NODE} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={REACT} alt="skill" />
                </div>
           
              </div>
       </div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
</div>
<div className="container">
  <div className="projectcontainer">
<div className="projectview">Preview</div>
<div className="projectdesign">
<div className="skills_projects">
                <div id="skill" className="skills_projects">
                  <img className="skills" src={HTML5} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={CSS3} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={JS} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={NODE} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={REACT} alt="skill" />
                </div>
           
              </div>
       </div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
</div>

 <div className="container">
  <div className="projectcontainer">
<div className="projectview">Preview</div>
<div className="projectdesign">
<div className="skills_projects">
                <div id="skill" className="skills_projects">
                  <img className="skills" src={HTML5} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={CSS3} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={JS} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={NODE} alt="skill" />
                </div>
                <div id="skill" className="skills_projects">
                  <img className="skills" src={REACT} alt="skill" />
                </div>
           
              </div>
       </div>
<div className="projectgit">GitHub</div>

    <div className="projectlive">LiveView</div>
  </div>
  </div>
      </main>
    );
  }
}

export default Portfolio;
