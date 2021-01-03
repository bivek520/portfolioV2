import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from './aboutMe';
import Education from './education';
import Project from './project';
import Skills from './skills';
import LandingPage from './landingPage';
const Main = () => {
	return (
		<Switch>
			<Route path='/portfolioV2/aboutMe' component={AboutMe} />
			<Route path='/portfolioV2/education' component={Education} />
			<Route path='/portfolioV2/project' component={Project} />
			<Route path='/portfolioV2/skills' component={Skills} />
			<Route path='/' component={LandingPage} />
		</Switch>
	);
};

export default Main;
