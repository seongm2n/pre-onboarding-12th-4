import { useEffect } from 'react';
import axios from 'axios';

function DataFetching({ onDataFetched }) {
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('data/data.json');
				const responseData = response.data.response;

				// 데이터를 배열 형태로 변환
				const dataArray = Object.keys(responseData).map((timestamp) => ({
					timestamp,
					...responseData[timestamp],
				}));

				onDataFetched(dataArray);
			} catch (error) {
				console.error(error.message);
			}
		}
		getData();
	}, [onDataFetched]);

	return null;
}

export default DataFetching;
