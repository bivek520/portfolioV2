import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

export function initFontAwesome() {
	return library.add(fab, faCheckSquare, faCoffee, faLinkedin, faGithub);
}
