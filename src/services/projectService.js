const projects = [
	{
		_id: '1',
		title: 'check-your-air',
		description: ' This app monitors the air quality of certain cities of Nepal',
		githubURL: 'https://github.com/bivek520/check_your_air',
		liveDemoUrl: 'https://bivek520.github.io/check_your_air/',
		imgLink: '/portfolioV2/static/media/check_your_air.283f7c69.png',
	},
	{
		_id: '2',
		title: 'SplitApp',
		description: 'This program simplifies splitting bill between roommates, groups, friends and family.',
		githubURL: 'https://github.com/bivek520/SplitApp',
		liveDemoUrl: '',
		imgLink: '/portfolioV2/static/media/splitApp.ef5fcd49.png',
	},
	{
		_id: '3',
		title: 'PokerPlus',
		description: ' A client-server based multiplayer player game that is based on 5 card poker.',
		githubURL: 'https://github.com/bivek520/PokerPlus',
		liveDemoUrl: '',
		imgLink: '/portfolioV2/static/media/poker.42c36001.png',
	},
	{
		_id: '4',
		title: 'tic-tac-toe',
		description: 'Game played by AI which uses MiniMax Algorithm',
		githubURL: 'https://github.com/bivek520/tic-tac-toe',
		liveDemoUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6676133731167739905/',
		imgLink: '/portfolioV2/static/media/tic-tac-screen.ec0824de.png ',
	},
];

export function getProject() {
	return projects;
}
