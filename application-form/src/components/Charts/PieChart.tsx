import React, { useEffect, useState, FC } from 'react'
import ReactEcharts from 'echarts-for-react'
import { IResume } from '../../interfaces/IResume'

interface IProps {
  chartData: any
}

export const PieChart: FC<IProps> = ({ chartData }) => {
  var _ = require('lodash')
  const [pieChartValues, setPieChartValues] = useState<
    { name: string; value: number; type?: string }[]
  >([{ name: '', value: 0, type: '' }])

  useEffect(() => {
    if (chartData) {
      let groupedByStatus = _.groupBy(chartData, 'status')
      console.log('groupedByStatus=', groupedByStatus)

      setPieChartValues([
        {
          value: groupedByStatus['accepted'].length,
          name: 'Accepted',
        },
        {
          value: groupedByStatus['rejected'].length,
          name: 'Rejected',
        },
      ])
    }
  }, [chartData])

  useEffect(() => {}, [pieChartValues])

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        return `${params}<br />
          ${params.name}: ${params.data.value} (${params.percent}%)<br />`
      },
    },
    series: [
      {
        type: 'pie',
        data: pieChartValues,
      },
    ],
  }

  return <ReactEcharts option={options} />
}
