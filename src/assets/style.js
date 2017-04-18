import loginCss from './css/login-css';
import mainCss from './css/main-css';
import registerCss from './css/register-css';



export default function getCss(page) {
	switch (page) {
		case 'login':
			return loginCss();
		case 'main':
			return mainCss();
		case 'register':
			return registerCss();
		default:
			return {
				body: {
					overflow: 'hidden'
				}
			}
	}
	return null;
}
