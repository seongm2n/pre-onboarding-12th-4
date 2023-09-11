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
		>
			<CartesianGrid stroke='#f5f5f5' />
			<XAxis
				dataKey='timestamp'
				tickFormatter={(value) => value.substring(11)}
			/>
			<YAxis yAxisId='left' />
			<YAxis
				yAxisId='right'
				orientation='right'
			/>
			<Tooltip />
			<Legend />
			<Bar
				dataKey='value_bar'
				barSize={20}
				fill='#413ea0'
				yAxisId='left'
				onClick={(data) => clickDistrict(data.id)}
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={`${entry.id === district ? `#444094` : `#8884d8`}`}
					/>
				))}
			</Bar>
			<Area
				type='monotone'
				dataKey='value_area'
				fill='#8884d8'
				stroke='#8884d8'
				yAxisId='right'
				domain={[0, 100]}
			/>
		</ComposedChart>
	);
}

export default ChartDisplay;
