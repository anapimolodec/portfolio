import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";

import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const ShallWeChat = () => {
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
                  <h1 class="card-title">Shall We Chat?</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/shall-we-chat"> Source Code </a></button>
                    <button className="link"><a href="https://shall-we-chat.netlify.app/"> Live Demo </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined" style={{borderBottom: "4px #bed3c3  solid"}}> Shall We Chat? </h1>
                  <p> Simple Chat Application where users can create chat rooms, invite other users, and have some good quality chatting!<br/>
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
                  <p> Shall-We-Chat is a mobile responsive and fully operational chat application, server provided by <a href="https://chatengine.io/">ChatEngine Rest API. </a> 
                  Users can register and create chat rooms, where they can invite any registered users! This website is build from scratch with love. </p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> React.js, Ant Design (UI Library), ChatEngine (API), JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p>  Full Front-End development, design, and connection to REST API.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/chat.png" />
                </div>
                <div className = "details-text-down "  style={{borderBottom: "4px #bed3c3 solid"}}>
                <p> Go and enter some chat rooms! If you do not want to register, just type "guest" for both username and password.</p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/shall-we-chat"> Source Code </a></button>
                    <button className="link"><a href="https://shall-we-chat.netlify.app/"> Live Demo </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default ShallWeChat;
