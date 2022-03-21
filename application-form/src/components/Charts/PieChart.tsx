import React, { useEffect, useState, FC } from 'react'
import ReactEcharts from 'echarts-for-react'

interface IProps {
  chartData: any
  chartType: string
}

export const PieChart: FC<IProps> = ({ chartData, chartType }) => {
  const [pieChartValues, setPieChartValues] = useState<
    { name: string; value: number; type?: string }[]
  >([{ name: '', value: 0, type: '' }])

  const tmp: any = []
  useEffect(() => {
    if (chartData) {
      if (chartType === 'numOfVersions') {
        chartData.entityElementResult.forEach((element: any) => {
          tmp.push({
            value: element.numberOfVersions,
            name: element.entityName,
            type: element.assessmentType,
          })
        })
        setPieChartValues(tmp)
      } else {
        setPieChartValues([
          {
            value: chartData.totalSelfAssessmentType,
            name: 'SELF_ASSESSMENT',
          },
          {
            value: chartData.totalExternalAssessmentType,
            name: 'EXTERNAL_ASSESSMENT',
          },
        ])
      }
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
        name: getChartName(),
        normal: {
          label: {
            show: true,
            position: 'inner',
            formatter: function (params: any) {
              return params + '%\n'
            },
          },
          labelLine: {
            show: false,
          },
        },
        type: 'pie',
        hoverOffset: 1,
        cursor: 'default',
        emphasis: {
          label: {
            show: true,
          },
        },
        data: pieChartValues,
      },
    ],
  }

  return <ReactEcharts option={options} />
}
