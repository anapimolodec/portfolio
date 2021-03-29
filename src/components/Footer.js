import React from "react";
import './footer.css';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import instagram from 'react-useanimations/lib/instagram';


const Footer = () => {
  return (
  	<div className = "footer-main">
  		<div className = "footer-text">
  			<h3> Personal Portfolio of Aiaru Mukhamedyarova. 2021. <br />All right reserved. </h3>
  		</div>
  		<div className="footer-logos">
  			<a href ="https://github.com/anapimolodec"> <UseAnimations animation = {github} size={48} strokeColor='white' /> </a>
  			<a href ="https://www.linkedin.com/in/aiaru/"> <UseAnimations animation = {linkedin} size={48} strokeColor='white' /> </a>
  			<a href ="https://www.instagram.com/aiaru.bagdatkyzy/"> <UseAnimations animation = {instagram} size={48} strokeColor='white'/> </a>
  		</div>
  	</div>
  	);
}

export default Footer;