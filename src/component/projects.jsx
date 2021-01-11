import React, { Component } from 'react';
import ProjectCard from './common/projectCard';
import { getProject } from '../services/projectService';
import '../App.css';
class Project extends Component {
	state = {
		projects: [],
	};
	componentDidMount() {
		const projects = getProject();
		this.setState({ projects });
	}
	renderProjects() {
		const data = this.state.projects;
		if (data) {
			const projects = data.map((item) => {
				const { _id, title, description, githubURL, liveDemoUrl, imgLink } = item;
				return (
					<div key={_id} className='col mb-3'>
						{
							<ProjectCard
								title={title}
								text={description}
								githubURL={githubURL}
								LiveDemoUrl={liveDemoUrl}
								imgLink={imgLink}
							/>
						}
					</div>
				);
			});

			return projects;
		}
	}
	render() {
		return (
			<div className='container'>
				<h2>Projects</h2>
				<div className='row mb-3 '>{this.renderProjects()}</div>
			</div>
		);
	}
}

export default Project;
