import React, { FC, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import { IResume } from '../../interfaces/IResume'

interface IProps {
  chartData: IResume[]
}

const LineChart: FC<IProps> = ({ chartData }) => {
  const xAxisValues: string[] = []
  const yAxisValues: number[] = []
  useEffect(() => {
    chartData.forEach((element) => {
      xAxisValues.push(element.resumeLink)
      yAxisValues.push(element.overallScore)
    })
  }, [chartData])

  const chartOptions = {
    // legend: {
    //   data:,
    //   icon: 'rect',
    //   y: 'top',
    // },
    xAxis: {
      data: xAxisValues,
      axisLabel: {
        textStyle: {
          color: '#aeaeae',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },

    yAxis: {
      type: 'value',
      position: 'right',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: function (value: number) {
          if (value !== 0) {
            return value
          }
          return ''
        },
        textStyle: {
          color: '#aeaeae',
          verticalAlign: 'bottom',
          align: 'right',
          lineHeight: 15,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: '100%',
      },
    ],
    series: [
      {
        data: yAxisValues,
        type: 'line',
        smooth: true,
        name: 'overal score',
        symbolSize: 3,
        lineStyle: {
          width: 1.7,
        },
        itemStyle: {
          normal: {
            symbol: '',
          },
        },
      },
    ],
  }

  return <ReactEcharts option={chartOptions} />
}
export default LineChart
