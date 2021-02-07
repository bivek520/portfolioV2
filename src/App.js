import React from 'react';
import NavBar from './component/navBar';
import { initFontAwesome } from './component/fontAwesome';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Resume from './component/resume';
import Project from './component/projects';
import LandingPage from './component/landingPage';

initFontAwesome();
function App() {
	return (
		<React.Fragment>
			<main className='container'>
				<NavBar />
				<Switch>
					<Route path='/resume' component={Resume} />
					<Route path='/project' component={Project} />
					<Route path='/' component={LandingPage} />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
