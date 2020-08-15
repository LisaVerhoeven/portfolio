import React from 'react';
import Fade from 'react-reveal/Fade';
import Project from './Project.js';
import Gradient from '../assets/gradientbackground.png';
import ToDO from '../assets/todo.png';
import Robofriends from '../assets/robofriends.png';
import Netwatch from '../assets/netwatch.png';
import Ecommerce from '../assets/ecommerce.png';
import './Projects.scss';


const ProjectList = () => {


	return(
	<React.Fragment>
		<section id="projects">
	      <div className="container">
	        <div className="project-wrapper">
	        <Fade>
	        <div>
	          <h2 className="section-title dark-blue-text">
	            Projects
	          </h2>
	         </div>
	    	</Fade>

				         
	        {[
	        	{
					title: 'E-commerce webshop',
				 	text: 'The goal of this project was to master React. This React webshop is built using React-Router, Hooks, Redux and Redux-Saga and integrates Firebase and the Stripe-API for the backend. Next to this I used styled-components, React Suspence and React Lazy and I transformed the application into a PWA. During the building process I also learned about GraphQl, Apollo and the ContextAPI.',
				 	image: Ecommerce,
				 	live: 'https://ecomwebshop.herokuapp.com',
				 	code: 'https://github.com/LisaVerhoeven/e-commerce'
				},
	        	{
					title: 'Netwatch',
				 	text: 'This Netflix tool is able to display the newly added movies and series in your chosen country on Netflix and can generate a random output based on the choices a user made. The front-end is built with React. Next to this, the server built with  Node.js is connected to an API and an PostgreSQL database to retrieve data. ',
				 	image: Netwatch,
				 	live: 'https://netwatch.netlify.app',
				 	code: 'https://github.com/LisaVerhoeven/netwatch'
				},
				{
					title: 'Robo Friends',
				 	text: 'Robo Friends uses an API to get random robots and has a search box to filter out certain user objects. This was my first React project so I learned the frameworks basics during the production of this web app.',
				 	image: Robofriends,
				 	live: 'https://lisaverhoeven.github.io/robofriends',
				 	code: 'https://github.com/LisaVerhoeven/robofriends'
				},
				{
					title: 'Gradient Background Generator',
				 	text: 'This web application creates a gradient of two colors the user picks and generates an RGBA color which can be used for the design of any other project.',
				 	image: Gradient,
				 	live: 'https://lisaverhoeven.github.io/rgba-gradient-machine/',
				 	code: 'https://github.com/LisaVerhoeven/rgba-gradient-machine'
				},
				{
					title: 'To-Do List',
				 	text: 'Simple html project, which I created to learn DOM manipulation. A to-do list which gives the user the opportunity to add and remove list items.',
				 	image: ToDO,
				 	live: 'https://lisaverhoeven.github.io/to-do-list/',
				 	code: 'https://github.com/LisaVerhoeven/to-do-list'
				}
			].map((projects, i) => {
	          	return(
			       <Project
			       title={projects.title}
			       text={projects.text}
			       image={projects.image}
			       live={projects.live}
			       code={projects.code}
			       key={i}
			       />
		          	);
      			})
          	}

          	</div>
          </div>
        </section>
    </React.Fragment>
	);
};

export default ProjectList;