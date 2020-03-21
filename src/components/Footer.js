import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (

	<React.Fragment>

	<footer className ="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a href="https://www.instagram.com/lisasverhoeven/?hl=nl" rel="noopener">
            <i className="fa fa-instagram fa-inverse"></i>
          </a>
          <a href="https://www.facebook.com/lisa.verhoeven.73" rel="noopener">
            <i className="fa fa-facebook fa-inverse"></i>
          </a>
          <a href="https://nl.linkedin.com/in/lisa-verhoeven-bab429191?trk=people-guest_people_search-card" rel="noopener">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href="https://github.com/LisaVerhoeven" rel="noopener">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr/>

        <p className="footer__text">
          © 2020 - Developed by <a href="https://github.com/LisaVerhoeven" rel="noopener">Lisa Verhoeven</a>  
        </p>

      
      </div>
    </footer>
    </React.Fragment>
    );

}

export default Footer;