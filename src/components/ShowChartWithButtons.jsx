import { useEffect } from 'react';
import Button from './commons/Button';
import ChartDisplay from './ChartDisplay';
import useChartData from '../hooks/useChartData';
import { useSearchParams } from 'react-router-dom';
import BtnContainer from './commons/BtnContainer';

function ShowChartWithButtons() {
	const { chartDistrict } = useChartData();
	const [searchParams, setSearchParams] = useSearchParams();
	const district = searchParams.get('district');

	const clickDistrict = (district) => {
		setSearchParams({ district });
	};

	useEffect(() => {
		searchParams.set('district', '전체');
	}, []);

	return (
		<div>
			<ChartDisplay
				district={district}
				onClick={clickDistrict}
			/>
			<BtnContainer>
				<Button
					left={district}
					right='전체'
					onClick={clickDistrict}
				>
					전체
				</Button>
				{chartDistrict.map((value) => (
					<Button
						left={value}
						right={district}
						onClick={clickDistrict}
						key={value}
					>
						{value}
					</Button>
				))}
			</BtnContainer>
		</div>
	);
}

export default ShowChartWithButtons;
