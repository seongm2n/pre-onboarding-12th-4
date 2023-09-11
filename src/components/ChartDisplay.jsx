import {
	ComposedChart,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

function ChartDisplay({ data, selectedDistrict }) {
	// 선택된 구 데이터 필터링
	const filteredData = data.filter((item) =>
		selectedDistrict.includes(item.id)
	);

	return (
		<ComposedChart
			width={1600}
			height={700}
			data={selectedDistrict.length > 0 ? filteredData : data}
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
			<Tooltip
				labelFormatter={(value) =>
					data.find((item) => item.timestamp === value).id
				}
			/>
			<Legend />
			<Bar
				dataKey='value_bar'
				barSize={20}
				fill='#413ea0'
				yAxisId='left'
			/>
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
