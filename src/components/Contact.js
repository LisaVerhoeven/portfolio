import React from 'react';
import Fade from 'react-reveal/Fade';
import './Contact.scss';

const Contact = () => {

	return (
	<React.Fragment>
		<section id="contact">
	      <div className="container">
	      <Fade>
	      <div>
	        <h2 className="section-title">
	          Contact
	        </h2>
	       </div>
	       </Fade>
	       <Fade bottom cascade>
	       <div>
	        <div className="contact-wrapper">
	          <p className="contact-wrapper__text">
	            Send me an e-mail or contact me through one of my social media profiles.
	          </p>
	          <a
	            target="rel=noopener"
	            className="cta-btn cta-btn--resume"
	            href="mailto:lisaverhoeven2001@hotmail.com"
	            >E-mail</a>
	        </div>
	        </div>
	        </Fade>
	      </div>
    	</section>
    </React.Fragment>



	);
}


export default Contact;