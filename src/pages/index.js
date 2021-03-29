import React, {useState} from "react";
import Helmet from "react-helmet";
import Navigation from '../components/Navigation';
import BigPage from '../components/BigPage';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import '../styles/global.css';


const Home = () => {




  return (
  		<div>
  			<Helmet>
            	<title>Portfolio | Aiaru </title>
        	</Helmet>
        	<main>
		  		<Navigation />
		  		<BigPage />
		  		<Projects />
		  		<ContactMe />
		  		<Footer />
	  		</main>
  		</div>
  	);
}

export default Home;

// <div className="scroll">
//   			<div className="circle1"></div>
//   			<div className="circle2"></div>
//   			<div className="circle3"></div>
//   		</div>