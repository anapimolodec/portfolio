import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";
import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const TryFindFace = () => {
	const [see1,setSee1] = useState(false);
  const seeMore = (e) => {
    e.preventDefault();
    setSee1(!see1);
  }
  
  return (
    <div className="project-item-wrapper">
      	<div className = "project-item">
              <div class="card try-find-face">
                <div class="card-content">
                  <h1 class="card-title">Try Find Face</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/try-find-face"> Source Code </a></button>
                    <button className="link"><a href="https://try-find-face.herokuapp.com/"> Live Demo </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined" style={{borderBottom: "4px #9b77a4  solid"}}> Try Find Face</h1>
                  <p> Try-Find-Face is a face detection app, which has Front-End, Server, and own Database connected and deployed.</p>
                  <button className="more" onClick = {(e)=>seeMore(e)}> See More ...</button> 
              </div>
              <div className="more-mobile">
                  <button className="more" onClick = {(e)=>seeMore(e)}> See More ...</button>
              </div>
        </div>
        <div className = "project-details">
        { see1 ? 
              <div className = "see_details">
                <div className="details-text-up" style={{borderTop: "4px  #9b77a4  solid"}}>
                  <p> Try-Find-Face is an application which is built to implement AI Face Detection service into a simple application. 
              A user can register and upload an Image Url Address to detect face or multiple faces on the provided image. 
              The app counts how many times the user detected faces and allows user to sign in any time later and continue using the app.
              The face detection algorithm is provided by <a href="https://www.clarifai.com/">Clarifai REST API.</a> </p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> React.js, Node.js, Express, Clarifai (API), Tachyons(Toolkit), JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p> Full Front-End, Back-End development, database development, design, and connection to REST API.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/face.png" />
                </div>
                <div className = "details-text-down "  style={{borderBottom: "4px  #9b77a4  solid"}}>
                <p> Want to challenge our website and upload crowded photos? </p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/try-find-face"> Source Code </a></button>
                    <button className="link"><a href="https://try-find-face.herokuapp.com/"> Live Demo </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default TryFindFace;
