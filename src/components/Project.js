import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'


const Project = ({title, text, image, live, code}) => {
	
	return (
		<div className="row">
       	 <div className="col-lg-4 col-sm-12">
            <Fade left cascade>
            <div>
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">{title}</h3>
                <div>
                  <p className="mb-4">
                    {text}
                  </p>
                </div>
                <a rel="noopener" className="cta-btn cta-btn--hero" href={live}>
                  See Live
                </a>
                <a rel="noopener" className="cta-btn text-color-main" href={code}>
                  Source Code
                </a>
              </div>
              </div>
              </Fade>
            </div> 
            <div className="col-lg-8 col-sm-12">
            <Fade right cascade>
              <div>
              <div className="project-wrapper__image">
                <a href={live} rel="noopener">
                <Tilt className="Tilt" options={{ max : 25 }} >
                  <div className="thumbnail rounded Tilt-inner">
                    <img className="img-fluid" alt="project" src={image} />
                  </div>
                </Tilt>
                </a>
              </div>
              </div>
              </Fade>
            </div>
          </div>

	);
}


export default Project;