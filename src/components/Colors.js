import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";

import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const Colors = () => {
	const [see1,setSee1] = useState(false);
  const seeMore = (e) => {
    e.preventDefault();
    setSee1(!see1);
    console.log("open/close")
  }
  return (
    <div className="project-item-wrapper">
      	<div className = "project-item">
              <div class="card colors">
                <div class="card-content">
                  <h1 class="card-title">Gradient Generator</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/gradient_generator"> Source Code </a></button>
                    <button className="link"><a href="https://anapimolodec.github.io/gradient_generator/"> Live Demo </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined"  style={{borderBottom: "4px #82d3ee solid"}}>Gradient Generator</h1>
                  <p> Gradient Generator is a simple website to create two-colored gradients.
                    </p>
                  <button className="more" onClick = {(e)=>seeMore(e)}> See More ...</button> 
              </div>
              <div className="more-mobile">
                  <button className="more" onClick = {(e)=>seeMore(e)}> See More ...</button>
              </div>
        </div>
        <div className = "project-details">
        { see1 ? 
              <div className = "see_details">
                <div className="details-text-up" style={{borderTop: "4px #82d3ee solid"}}>
                  <p> User can play with two color palletes in order to create beautiful gradient. Also, user can randomize color gradient and pick.</p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> Vanilla JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p> Full Front-End development and design.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/gradient.png" />
                </div>
                <div className = "details-text-down " style={{borderBottom: "4px #82d3ee solid"}}>
                <p> Play with colors! </p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/gradient_generator"> Source Code </a></button>
                    <button className="link"><a href="https://anapimolodec.github.io/gradient_generator/"> Live Demo </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default Colors;
