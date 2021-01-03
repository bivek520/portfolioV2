import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className='landing-grid'>
					<Cell col={12}>
						<img
							src='https://avatars0.githubusercontent.com/u/57966410?s=460&u=d30c6289baa567f5ca27d55afbd8683bed955a2a&v=4'
							alt='Profile_pic'
							className='profile-img'
						/>
					</Cell>
					<div className='banner-text'>
						<h1>Bivek Shrestha</h1>

						<hr />

						<p>C | C++ | Python | SQL |JavaScript | React | Laravel | MongoDB</p>
					</div>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
