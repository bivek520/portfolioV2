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
				const { _id, title, description, githubURL, liveDemoUrl, img } = item;
				return (
					<div key={_id} className='col-sm-4 pb-4'>
						{
							<ProjectCard
								title={title}
								text={description}
								githubURL={githubURL}
								LiveDemoUrl={liveDemoUrl}
								img={img}
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
			<div className='mb-auto'>
				<h2 className='expand-lg'>Projects</h2>
				<div className='row '>{this.renderProjects()}</div>
			</div>
		);
	}
}

export default Project;
