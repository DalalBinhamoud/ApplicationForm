import React, { FC, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'

interface IProps {
  chartData: any
}

const LineChart: FC<IProps> = ({ chartData }) => {
  const temp: string[] = []

  const xAxisData = () => {
    let arr: any = []
    if (chartData) {
      arr = temp
    }
    return arr
  }

  const getDataBasedOnLevel = () => {
    const levels: any = []

    if (chartData) {
      chartData.entityElementResult.forEach((element: any) => {
        levels.push({
          data: getYAxisData(element.entityElementResult),
          type: 'line',
          name: element.elementName,
          symbolSize: 3,
          lineStyle: {
            width: 1.7,
          },
          itemStyle: {
            normal: {
              symbol: '',
            },
          },
        })
      })
    }
    return levels
  }

  const getLevelNumber = () => {
    const levels = getDataBasedOnLevel()
    const levelsNumber: string[] = []

    levels.forEach((element: any) => {
      levelsNumber.push(element.number)
    })
    return levelsNumber
  }

  const getYAxisData = (entityElementResult?: any) => {
    const arr: any = []
    if (chartData) {
      chartData.entityElementResult.forEach((element: any) => {
        arr.push(element.complianceResult)
        if (!temp.includes(element.entityName)) {
          temp.push(element.entityName)
        }
      })
    }

    return arr
  }

  useEffect(() => {}, [chartData])

  const chartOptions = {
    grid: {
      left: 0,
      right: '3%',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      data: getLevelNumber(),
      icon: 'rect',
      y: 'top',
    },
    xAxis: {
      data: xAxisData(),
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
        data: getYAxisData(),
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
