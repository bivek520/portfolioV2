import x from '../../img/check_your_air.png';

const ProjectCard = ({ title, text, githubURL, LiveDemoUrl, img }) => {
	return (
		<div className='card h-100'>
			<img src={process.env.PUBLIC_URL + `/images/${img}`} className='card-img-top .img-fluid' alt='...' />
			<div className='card-body '>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{text}</p>

				<div classNameName='align-self-end'>
					<a href={githubURL} rel='noreferrer' target='_blank' className='btn btn-primary'>
						GitHub
					</a>
					{LiveDemoUrl && (
						<a href={LiveDemoUrl} rel='noreferrer' target='_blank' className='btn btn-primary mx-2'>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
