import { CardTitle, CardText, CardActions, Card } from 'react-mdl';
import i from '../../img/splitApp.png';

const ProjectCard = ({ title, text, githubURL, LiveDemoUrl, imgLink }) => {
	const img = imgLink
		? `url(${imgLink})  center / cover`
		: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover';
	console.log(i, 'this is the image');

	return (
		<Card shadow={6} style={{ minWidth: '450', margin: 'auto' }}>
			<CardTitle
				style={{
					color: 'black',
					height: '176px',
					background: img,
				}}
			></CardTitle>
			<CardText>
				<h5>{title}</h5>
				{text}
			</CardText>
			<CardActions border>
				<a href={githubURL} target='_blank' rel='noopener noreferrer' className='btn btn-primary m-2'>
					GitHub
				</a>
				{LiveDemoUrl && (
					<a href={LiveDemoUrl} target='_blank' rel='noopener noreferrer' className='btn btn-primary  m-2'>
						Live Demo
					</a>
				)}
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
