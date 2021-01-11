import React from 'react';
import NavBar from './component/navBar';
import { initFontAwesome } from './component/fontAwesome';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AboutMe from './component/aboutMe';
import Education from './component/education';
import Project from './component/projects';
import LandingPage from './component/landingPage';

initFontAwesome();
function App() {
	return (
		<React.Fragment>
			<NavBar />
			<main className='container'>
				<Switch>
					<Route path='/portfolioV2/aboutMe' component={AboutMe} />
					<Route path='/portfolioV2/education' component={Education} />
					<Route path='/portfolioV2/project' component={Project} />
					<Route path='/' component={LandingPage} />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
