import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function GraphModule() {
  return (
    <BarChart
        xAxis={[
        {
            id: 'Score-Graph-Representation',
            data: ['DBMS', 'CN', 'OS'],
            scaleType: 'band',
        },
        ]}
        series={[
        {
            data: [3, 10, 5],
        },
        ]}
        width={400}
        height={400}
    />
  )
}

export default GraphModule