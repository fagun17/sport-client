import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

const Chart = ({ data }) => {
	return (
		<PieChart width={400} height={400}>
			<Pie
				data={data}
				dataKey='value'
				cx={200}
				cy={200}
				outerRadius={80}
				fill='#8884d8'
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={entry.color} />
				))}
			</Pie>
		</PieChart>
	)
}

export default Chart
