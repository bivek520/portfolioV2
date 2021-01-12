import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './aboutMe';
import Education from './education';
import Project from './projects';

import LandingPage from './landingPage';
const Main = () => {
	return (
		<main className='container'>
			<Switch>
				<Route path='/portfolioV2/aboutMe' component={AboutMe} />
				<Route path='/portfolioV2/education' component={Education} />
				<Route path='/portfolioV2/project' component={Project} />

				<Route path='/' component={LandingPage} />
			</Switch>
		</main>
	);
};

export default Main;
