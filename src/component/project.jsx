import React, { Component } from 'react';
import ProjectCard from './common/projectCard';
import { getProject } from '../services/projectService';
import '../App.css';
class Project extends Component {
	state = {};
	componentDidMount() {
		const projects = getProject();
		this.setState({ projects });
	}
	renderProjects() {}
	render() {
		console.log(this.state.projects);
		return (
			<React.Fragment>
				<h1>Projects </h1>
				<div className='projects-grid'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</React.Fragment>
		);
	}
}

export default Project;
