import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './resume';
import Project from './projects';

import LandingPage from './landingPage';
const Main = () => {
	return (
		<main className='container'>
			<Switch>
				<Route path='/portfolioV2/education' component={Resume} />
				<Route path='/portfolioV2/project' component={Project} />
				<Route path='/' component={LandingPage} />
			</Switch>
		</main>
	);
};

export default Main;
