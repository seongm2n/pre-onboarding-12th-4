import { useNavigate, useRouteError } from 'react-router-dom';
import { Error, ErrorLayout } from '../styles/Error';

function NotFound() {
	const error = useRouteError();
	const navigate = useNavigate();

	let title = 'An error occurred!';
	let message = 'Something went wrong!';
	if (error.status === 500) {
		message = error.data.message;
	}
	if (error.status === 404) {
		title = '404 Not found!';
		message = 'Could not find resource or page.';
	}

	const returnHome = () => {
		navigate('/');
	};

	return (
		<ErrorLayout>
			<Error>
				<h1>{title}</h1>
				<h3>{message}</h3>
			</Error>
			<button onClick={returnHome}>home</button>
		</ErrorLayout>
	);
}
export default NotFound;
