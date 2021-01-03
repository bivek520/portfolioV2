import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../img/profilePic.png';

class LandingPage extends Component {
	render() {
		console.log(img);
		return (
			<React.Fragment>
				<div style={{ overflow: 'auto' }}>
					<Grid className='landing-grid'>
						<Cell col={12}>
							<img
								// src='https://avatars0.githubusercontent.com/u/57966410?s=460&u=d30c6289baa567f5ca27d55afbd8683bed955a2a&v=4'
								src={img}
								alt='Profile_pic'
								className='profile-img'
							/>
						</Cell>
						<div className='banner-text'>
							<h1>Bivek Shrestha</h1>

							<hr />

							<p>C | C++ | Python | SQL | JavaScript | React | Laravel | MongoDB </p>
							<div className='social-links'>
								<a href='https://www.linkedin.com/in/bstha/' rel='noreferrer' target='_blank'>
									<FontAwesomeIcon icon={['fab', 'linkedin']} />
								</a>

								<a href='https://github.com/bivek520' rel='noreferrer' target='_blank'>
									<FontAwesomeIcon icon={['fab', 'github']} />
								</a>
							</div>
						</div>
					</Grid>
				</div>
				<div> Item visible </div>
				<div> Item visible </div>
				<div> Item visible </div>
				<div> Item visible </div>

				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
				<div> Item NOT visible </div>
			</React.Fragment>
		);
	}
}

export default LandingPage;
