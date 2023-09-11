import { useState } from 'react';
import Button from './commons/Button';
import ChartDisplay from './ChartDisplay';
import DataFetching from './DataFetching';

function ShowChartWithButtons() {
	const [data, setData] = useState(null);
	const [selectedDistrict, setSelectedDistrict] = useState([
		'성북구',
		'중랑구',
		'노원구',
		'강남구',
	]);

	// 데이터를 받아와서 상태에 설정하는 함수
	const handleDataFetched = (dataArray) => {
		setData(dataArray);
	};

	return (
		<div>
			<div>
				<Button
					text='해제'
					onClick={() => setSelectedDistrict([])}
				/>
				<Button
					text='성북구'
					onClick={() => setSelectedDistrict(['성북구'])}
				/>
				<Button
					text='중랑구'
					onClick={() => setSelectedDistrict(['중랑구'])}
				/>
				<Button
					text='노원구'
					onClick={() => setSelectedDistrict(['노원구'])}
				/>
				<Button
					text='강남구'
					onClick={() => setSelectedDistrict(['강남구'])}
				/>
			</div>

			<DataFetching onDataFetched={handleDataFetched} />
			{data ? (
				<ChartDisplay
					data={data}
					selectedDistrict={selectedDistrict}
				/>
			) : (
				<p>Loading data...</p>
			)}
		</div>
	);
}

export default ShowChartWithButtons;
