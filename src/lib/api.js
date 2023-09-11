import axios from 'axios';

export const getChartData = async () => {
	const res = await axios.get('/data/data.json');

	return res.data.response;
};
