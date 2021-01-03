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
			<Route path='/aboutMe' component={AboutMe} />
			<Route path='/education' component={Education} />
			<Route path='/project' component={Project} />
			<Route path='/skills' component={Skills} />
			<Route path='/' component={LandingPage} />
		</Switch>
	);
};

export default Main;
