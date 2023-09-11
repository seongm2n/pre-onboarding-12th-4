import {
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Cell,
} from 'recharts';
import useChartData from '../hooks/useChartData';

function ChartDisplay({ district, clickDistrict }) {
	const { data } = useChartData();

	const handleBarClick = (entry) => {
		const selectedId = entry.id;
		clickDistrict(selectedId); // 선택한 바의 id를 부모 컴포넌트로 전달
	};

	return (
		<ComposedChart
			width={1600}
			height={700}
			data={data}
			margin={{
				top: 20,
				right: 20,
				bottom: 20,
				left: 20,
			}}
			barGap={10}
		>
			<CartesianGrid stroke='#f5f5f5' />
			<XAxis dataKey='time' />
			<YAxis
				yAxisId='left'
				label={{
					value: 'value_bar',
					angle: -90,
					position: 'insideLeft',
					offset: -10,
				}}
			/>
			<YAxis
				yAxisId='right'
				orientation='right'
				label={{
					value: 'value_area',
					angle: 90,
					position: 'insideRight',
					offset: 1,
				}}
			/>
			<Tooltip
				labelFormatter={(value) => data.find((item) => item.time === value).id}
			/>
			<Legend height={60} />
			<Bar
				dataKey='value_bar'
				barSize={20}
				fill='#9b634c'
				yAxisId='left'
				onClick={handleBarClick}
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={`${entry.id === district ? `#9b634c` : `#bfa398`}`}
					/>
				))}
			</Bar>
			<Area
				type='monotone'
				dataKey='value_area'
				fill='#e795b4'
				stroke='#ea83aa'
				yAxisId='right'
				domain={[0, 100]}
			/>
		</ComposedChart>
	);
}

export default ChartDisplay;
