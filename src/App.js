import React from 'react';
import NavBar from './component/navBar';
import { initFontAwesome } from './component/fontAwesome';
import './App.css';

initFontAwesome();
function App() {
	return (
		<React.Fragment>
			<NavBar />
		</React.Fragment>
	);
}

export default App;
