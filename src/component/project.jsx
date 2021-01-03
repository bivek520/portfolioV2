import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component {
	state = {};
	render() {
		return (
			<div>
				Projects
				<div>
					<FontAwesomeIcon icon={['fab', 'linkedin']} size='10x' />
					Your <FontAwesomeIcon icon={['fab', 'github']} /> is hot and ready!
				</div>
			</div>
		);
	}
}

export default Project;
