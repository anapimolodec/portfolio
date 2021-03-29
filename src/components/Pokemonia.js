import React,{useState} from 'react';
import Code from "./images/code.svg";
import My from "./images/my.svg";

import './projects.css';
import { StaticImage } from "gatsby-plugin-image";

const Pokemonia = () => {
	const [see1,setSee1] = useState(false);
  const seeMore = (e) => {
    e.preventDefault();
    setSee1(!see1);
    console.log("open/close")
  }
  return (
    <div className="project-item-wrapper">
      	<div className = "project-item">
              <div class="card pokemonia">
                <div class="card-content">
                  <h1 class="card-title">Pokemonia</h1>
                  <div className="buttons">
                    <button className="link"><a href="https://github.com/anapimolodec/pokemonia"> Source Code </a></button>
                    <button className="link"><a href="https://anapimolodec.github.io/pokemonia/"> Live Demo </a></button>
                  </div>
                  
                </div>  
              </div>
              <div className = "project-text">
                  <h1 className="underlined"  style={{borderBottom: "4px #FCCF00 solid"}}>Pokemonia</h1>
                  <p> Pokemonia is a pokemon generator, which gives information about the wanted pokemon.
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
                <div className="details-text-up" style={{borderTop: "4px #FCCF00 solid"}}>
                  <p> Pokemonia fetches pokemon data from <a href="https://pokeapi.co/">PokeAPI </a>. It is really useful for Pokemon fans, who want to get information about their Pokemon, in the structured and fast way.
                  I also wrote a <a href="https://anapimolodec.medium.com/using-pokeapi-to-build-simple-pokemon-generator-e63c92bfa0d5" > medium post</a> about the creation of this website for my fellow web developers.</p>
                </div>
                <div className="details-text">
                  <div className = "text-block">
                    <span className="line"><Code style={{width: "25px", height: "25px"}}/><h3> Technologies used to build: </h3> </span>
                    <p> PokeAPI (API), Vanilla JS(ES6), HTML5, CSS3 </p>
                  </div>
                  <div className = "text-block">
                    <span className="line"><My style={{width: "25px", height: "25px"}}/><h3> My contribution: </h3> </span>
                    <p> Full Front-End development, design, and connection to REST API.</p>
                  </div>
                </div>

                <div className="screen">
                  <StaticImage src="./images/pokemon.png" />
                </div>
                <div className = "details-text-down " style={{borderBottom: "4px #FCCF00 solid"}}>
                <p> Go get your random Pokemon! </p>
                <div>
                    <button className="link"><a href="https://github.com/anapimolodec/pokemonia"> Source Code </a></button>
                    <button className="link"><a href="https://anapimolodec.github.io/pokemonia/"> Live Demo </a></button>
                  </div>
                </div>
              
              </div> : <div className ="empty" > </div>}
        </div>
    </div>
                  
    
        
  	);
}

export default Pokemonia;
