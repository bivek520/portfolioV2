import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import '../App.css';

const NavBar = () => {
	return (
		<div className='header-color'>
			<Layout>
				<Header
					className='header-color'
					title={
						<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
							Bivek Shrestha
						</Link>
					}
					scroll
				>
					<Navigation>
						<Link to='/education'>Education</Link>
						<Link to='/skills'>Skills</Link>
						<Link to='/project'>Project</Link>
						<Link to='/aboutMe'>About Me</Link>
					</Navigation>
				</Header>
				<Drawer
					title={
						<Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
							Bivek Shrestha
						</Link>
					}
				>
					<Navigation>
						<Link to='/education'>Education</Link>
						<Link to='/skills'>Skills</Link>
						<Link to='/project'>Project</Link>
						<Link to='/aboutMe'>About Me</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className='page-content' />
					<Main />
				</Content>
			</Layout>
		</div>
	);
};

export default NavBar;
