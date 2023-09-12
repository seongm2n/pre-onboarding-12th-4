import { useEffect } from 'react';
import Button from './commons/Button';
import ChartDisplay from './ChartDisplay';
import useChartData from '../hooks/useChartData';
import { useSearchParams } from 'react-router-dom';
import BtnContainer from './commons/BtnContainer';
import { Layout } from '../styles/Layout';

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
		<Layout>
			<ChartDisplay
				district={district}
				clickDistrict={clickDistrict}
			/>
			<BtnContainer>
				<Button
					value={district}
					district='전체'
					onClick={clickDistrict}
				>
					전체
				</Button>
				{chartDistrict.map((value) => (
					<Button
						value={value}
						district={district}
						onClick={clickDistrict}
						key={value}
					>
						{value}
					</Button>
				))}
			</BtnContainer>
		</Layout>
	);
}

export default ShowChartWithButtons;
