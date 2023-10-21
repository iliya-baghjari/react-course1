import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

    const dataPointsValues= props.dataPoints.map(data=> data.value)
    const totalMax = Math.max(...dataPointsValues)
  return (
    <div className='chart'>
        {props.dataPoints.map( dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label} />)}
    </div>
  )
}

export default Chart