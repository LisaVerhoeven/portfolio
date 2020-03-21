import React from 'react';
import Fade from 'react-reveal/Fade'
import './FirstView.scss';



const FirstView = () => {
	return(
    <React.Fragment>
    <Fade left cascade>
    <div id="top"></div>
  		<div id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hi, my name is <span className="text-color-main">Lisa</span>
            <br />
            I'm Your Full-Stack Web Developer.
          </h1>
          <p className="hero-cta load-hidden">
            <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
          </p>
        </div>
      </div>
      </Fade>
    </React.Fragment>

	);
};


export default FirstView;
