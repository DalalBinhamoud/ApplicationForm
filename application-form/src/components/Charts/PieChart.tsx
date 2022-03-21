import React, { useEffect, useState, FC } from 'react'
import ReactEcharts from 'echarts-for-react'
import { IResume } from '../../interfaces/IResume'

interface IProps {
  chartData: any
  chartType: string
}

export const PieChart: FC<IProps> = ({ chartData, chartType }) => {
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
          value: 2, //groupedByStatus['accepted'].length,
          name: 'Accepted',
        },
        {
          value: 3, //groupedByStatus['rejected'].length,
          name: 'Rejected',
        },
      ])
    }
  }, [chartData])

  useEffect(() => {}, [pieChartValues])

  const getChartName = () => {
    if (chartType === 'numOfVersions') {
      return 'ASSESSMENT_VERSIONS'
    }
    return 'ASSESSMENT_TYPE'
  }

  const options = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        if (chartType === 'numOfVersions') {
          return `${params.seriesName} (${params.data.type})<br />
        ${params.name}: ${params.data.value} (${params.percent}%)<br />`
        } else {
          return `${params.seriesName}<br />
          ${params.name}: ${params.data.value} (${params.percent}%)<br />`
        }
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
