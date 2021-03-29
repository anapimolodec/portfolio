import React from "react";

import Bootstrap from "./images/bootstrap.svg";
import Gatsby from "./images/gatsby.svg";
import JS from "./images/logo-javascript.svg";
import HTML5 from "./images/html5.svg";
import CSS3 from "./images/css-5.svg";
import Python from "./images/python.svg";
import NodeJS from "./images/nodejs.svg";
import Git from "./images/git-icon.svg";
import Npm from "./images/npm.svg";
import SQL from "./images/postgresql.svg";
import ReactJS from "./images/reactJS.svg";
import Netlify from "./images/netlify.svg";
import Heroku from "./images/heroku.svg";
import Desk from './images/desk.svg';
import Skills from './images/skills.svg';
import './bigpage.css';
import { StaticImage } from "gatsby-plugin-image";
const BigPage = () => {

  return (
  	<div className = "bigpage" id="about">  
      <div className = "bigpage_top">
            <div className="image-wrap">
               <Desk style={{width: "500px", height: "500px"}}/>
            </div> 
            <div className="words" > 
               <p className="bigwords"> Hi, I am Aiaru.</p>
               <p className = "smallwords">
               I am a web developer based in Seoul.
               <br/>
               I make modern web applications. 
               <br/>
               Welcome to my portfolio!
               </p>
            </div>
          
      
      </div>
          
  		<div  className="skills">
          <div className="skills-title">What I do</div>
          <div className = "bigpage_top">
            <div className = "skills-info-grid">
              <div className = "skills-grid-top"><p className = "smallwords"> I create neat webistes with good functionality. I learn new tools and libraries as I code. Here are some of the things I am experienced at.</p></div>
              <div className="skills-grid">
              
                <div className="skill"><ReactJS style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Gatsby style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><HTML5 style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><CSS3 style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><JS style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Python style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><NodeJS style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Npm style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><SQL style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Bootstrap style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Heroku style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Netlify style={{width: "50px", height: "50px"}}/></div>
                <div className="skill"><Git style={{width: "50px", height: "50px"}}/></div>
              
              </div>
            </div>
            <div className="image-wrap-skills">
               <Skills style={{width: "500px", height: "500px"}}/>
            </div> 
          </div>
          
          
      </div>
  	</div>
  	);
}

export default BigPage;
