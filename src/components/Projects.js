import React,{useState} from "react";
import './projects.css';
import Code from "./images/code.svg";
import My from "./images/my.svg";
import Glossier from './Glossier.js';
import ShallWeChat from './ShallWeChat.js';
import TryFindFace from './TryFindFace.js';
import Pokemonia from './Pokemonia.js';
import Colors from './Colors.js';
import PPortfolio from './PPortfolio.js';
const Projects = () => {
  
  return (
  	<div className = "projects-main" >
  		<div className="projects-title" id="projects">
  		Projects
  		</div>
  		<div className="projects-grid" >
        <ShallWeChat />
        <Glossier/>
        <TryFindFace />
        <PPortfolio />
        <Pokemonia />
        <Colors />
  		</div>
  	</div>
  	);
}

export default Projects;
