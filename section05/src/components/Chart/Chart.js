import React from 'react';
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {
  const totalMax = Math.max(...props.chartData.map((data) => data.value))

  return (
    <div className='chart'>
      {
        props.chartData?.map(data => (
          <ChartBar key={data.label}
                    value={data.value}
                    maxValue={totalMax}
                    label={data.label}
          />
        ))
      }
    </div>
  );
};

export default Chart;