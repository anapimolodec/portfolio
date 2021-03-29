import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";

import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const PPortfolio = () => {
	const [see1,setSee1] = useState(false);
  const seeMore = (e) => {
    e.preventDefault();
    setSee1(!see1);
  }
  
  return (
    <div className="project-item-wrapper">
      	<div className = "project-item">
              <div class="card shall-we-chat">
                <div class="card-content">
                  <h1 class="card-title">Personal Portfolio</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/shall-we-chat"> Source Code </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined" style={{borderBottom: "4px #bed3c3  solid"}}>Personal Portfolio</h1>
                  <p> My personal portfolio with the desciption of accomplished projects.<br/>
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
                <div className="details-text-up" style={{borderTop: "4px #bed3c3 solid"}}>
                  <p> This is my personal portfolio, which I coded from scratch without any templates or starters. It is a brief summary of my web development journey. I used Gatsby to make this static website fast and modern.</p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> Gatsby, JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p>  Full Front-End development and design.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/chat.png" />
                </div>
                <div className = "details-text-down "  style={{borderBottom: "4px #bed3c3 solid"}}>
                <p> You are already using the live demo, so feel free to see the source code!</p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/shall-we-chat"> Source Code </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default PPortfolio;
