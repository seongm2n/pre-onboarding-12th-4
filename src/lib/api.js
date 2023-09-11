import axios from 'axios';

const DATA = './data/data.json';

const instance = axios.create({
	baseURL: DATA,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
