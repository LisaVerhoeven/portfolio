import React from 'react';
import Fade from 'react-reveal/Fade';
import lisa from '../assets/Lisa.png';

import './AboutMe.scss';


const AboutMe = () => {
	return(
		<section id="about">
      <div className="container">
      <Fade>
      <div>
        <h2 className="section-title">
          About me
        </h2>
      </div>
      </Fade>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
           <Fade left cascade>
           <div>
            <div className="about-wrapper__image">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={lisa}
                alt="Profile"
              />
            </div>
            </div>
            </Fade>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
            <Fade right cascade>
            <div>
              <p className="about-wrapper__info-text">
               My name is Lisa Verhoeven (19) and I am from the Netherlands.
               I started getting into coding when I was about 15 years old by building my first IOS-app with XCode.
               I am currently enrolled in a double major in Computer Science and Engineering
               and Applied Mathematics at the Eindhoven University of Technology.
              </p>
              <p className="about-wrapper__info-text">
                I have built some personal projects to develop my skills, but I have also 
                helped local companies to improve their web applications and online presence. You can find a collection of the projects I
                have built down below. If you want to contact me click the button!
              </p>
              <span className="d-flex mt-3 btn-wrap">
                <a className="cta-btn cta-btn--resume" href="#contact">
                  Contact
                </a>
              </span>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>


	);
};


export default AboutMe;