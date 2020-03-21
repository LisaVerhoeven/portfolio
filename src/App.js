import React from 'react';
import FirstView from './components/FirstView';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/components/buttons.scss';
import './styles/components/typography.scss';
import './styles/components/sections.scss';
import './App.css';

function App() {
  return (
  	<React.Fragment>
    <FirstView/>
    <AboutMe/>
    <ProjectList/>
    <Contact/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
