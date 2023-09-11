import { useEffect, useState } from 'react';
import { getChartData } from '../lib/api';

function useChartData() {
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		const getChart = async () => {
			const data = await getChartData();
			const arrData = Object.entries(data).map(([time, item]) => ({
				time: new Date(time).toLocaleTimeString(),
				...item,
			}));
			setChartData(arrData);
		};
		getChart();
	}, []);

	const chartDistrict = [...new Set(chartData.map((data) => data.id))].sort();
	return { data: chartData, chartDistrict };
}

export default useChartData;
