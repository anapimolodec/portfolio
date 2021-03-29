import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";
import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const Glossier = () => {
	const [see1,setSee1] = useState(false);
  const seeMore = (e) => {
    e.preventDefault();
    setSee1(!see1);
    console.log("open/close")
  }
  return (
    <div className="project-item-wrapper">
      	<div className = "project-item">
              <div class="card glossier">
                <div class="card-content">
                  <h1 class="card-title">Glossier Copy</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/glossier-copy"> Source Code </a></button>
                    <button className="link"><a href="https://glossier-copy.netlify.app/"> Live Demo </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined"  style={{borderBottom: "4px #FFC0CB solid"}}> Glossier Copy </h1>
                  <p> This is an ecommerce website, inspired by <a href="https://www.glossier.com/">Glossier.com</a> and made for learning purposes from scratch. <br />
                    Glossier Copy is fully functional ecommerce shop, which sells skincare and make-up products. 
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
                <div className="details-text-up" style={{borderTop: "4px #FFC0CB solid"}}>
                  <p> Glossier Copy is an ecommerce website which gives a feel of real skincare shopping station. It fetches real products from <a href="https://commercejs.com/">Commercejs</a> API 
                  and let you see products sorted by categories and automatically updates the products upon new arrival. </p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> React.js, Material-UI (Framework), Commerce.js (API), JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p> Full Front-End development, design, and connection to Commerce.js API.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/glossier.png" />
                </div>
                <div className = "details-text-down " style={{borderBottom: "4px #FFC0CB solid"}}>
                <p> Visit the website to browse our cool cosmetics shop! </p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/glossier-copy"> Source Code </a></button>
                    <button className="link"><a href="https://glossier-copy.netlify.app/"> Live Demo </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default Glossier;
