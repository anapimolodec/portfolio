import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import ParticleEffectButton from 'react-particle-effect-button';
import Replay from './images/replay-arrow.svg';
import './contactme.css';

export default function ContactMe() {
  const [hidden, setHidden] = useState(false);;
  const sendEmail = (e) =>  {
    e.preventDefault();
    //setHidden(true);

    emailjs.sendForm('gmail', 'email_template', e.target, 'user_DlmP2OeiIMsQmVQnm9nYe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();

      //setHidden(false);
    
    setHidden(true);
  }

  const makeAnimation = (e) => {
    e.preventDefault();
    setHidden(true);
    console.log("pressed button");
  }

  return (
    <div className="container">
      <div className="contact-title">
        Contact Me!
      </div>
      <form className="contact-form" onSubmit={e => sendEmail(e)} id="contactme">
    	<div className = "form-line"> 
    		<label>Name</label>
      	<input type="text" name="user_name" />
    	</div>
    	<div className = "form-line">
    		<label>Email</label>
      	<input type="email" name="user_email" />
    	</div>
    	<div className = "form-line">
    		<label>Message</label>
      	<textarea name="message" />
    	</div>
    	<div className = "form-button">
        <ParticleEffectButton
        color='#f3f3f3'
        hidden={hidden}
        type="triangle"
        >
          <input type="submit" value="done"/>
        </ParticleEffectButton>
        <Replay style={{width: "15px", height: "15px"}} onClick ={() => setHidden(false)}/>
    			
    	</div>
      </form>
        
        
     
    </div>
  );
}