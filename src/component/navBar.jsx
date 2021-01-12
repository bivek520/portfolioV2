import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import './navBar.css';

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
			<Link className='navbar-brand' to='/portfolioV2'>
				Bivek Shrestha
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
				<div className='navbar-nav ml-auto'>
					<NavLink className='nav-item nav-link' to='/education'>
						Education
					</NavLink>
					<NavLink className='nav-item nav-link' to='/project'>
						Project
					</NavLink>
					<NavLink className='nav-item nav-link' to='/aboutMe'>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
