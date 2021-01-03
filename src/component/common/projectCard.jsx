import { CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Card } from 'react-mdl';

const ProjectCard = () => {
	return (
		<Card shadow={6} style={{ minWidth: '450', margin: 'auto' }}>
			<CardTitle
				style={{
					color: '#fff',
					height: '176px',
					background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover',
				}}
			>
				Welcome
			</CardTitle>
			<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend
				lacinia...
			</CardText>
			<CardActions border>
				<Button colored>GitHub</Button>
				<Button colored>Live Demo</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
