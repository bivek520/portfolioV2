import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../img/profilePic.png';
import './landingPage.css';

class LandingPage extends Component {
	render() {
		return (
			<div className='container-fluid bg-1 mb-5'>
				<div className='text-center'>
					<img src={img} className='img-fluid pb-5' width='350' height='236' alt='...' />
				</div>

				<div
					className='card '
					style={{ width: '60%', background: 'black', margin: 'auto', position: 'relative' }}
				>
					<div className='card-body'>
						<h1 className='text-center text-white'>Bivek Shrestha</h1>

						<hr />

						<p className='text-center text-white'>
							C | C++ | Python | SQL | JavaScript | React | Laravel | MongoDB{' '}
						</p>
						<div className='text-center'>
							<a
								style={{ color: 'white', fontSize: '4em', padding: '10px' }}
								href='https://www.linkedin.com/in/bstha/'
								rel='noreferrer'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'linkedin']} />
							</a>

							<a
								style={{ color: 'white', fontSize: '4em', padding: '10px' }}
								href='https://github.com/bivek520'
								rel='noreferrer'
								target='_blank'
							>
								<FontAwesomeIcon icon={['fab', 'github']} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;
