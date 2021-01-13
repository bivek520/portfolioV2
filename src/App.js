import React from 'react';
import NavBar from './component/navBar';
import { initFontAwesome } from './component/fontAwesome';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import About from './component/about';
import Education from './component/education';
import Project from './component/projects';
import LandingPage from './component/landingPage';

initFontAwesome();
function App() {
	return (
		<React.Fragment>
			<main className='container'>
				<NavBar />

				<Switch>
					<Route path='/about' component={About} />
					<Route path='/education' component={Education} />
					<Route path='/project' component={Project} />
					<Route path='/' component={LandingPage} />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
