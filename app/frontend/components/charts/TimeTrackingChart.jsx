import React from 'react'
import Chart from 'react-apexcharts'

export default function TimeTrackingChart({ data, title = "Time Tracking by Project" }) {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: data.map(item => item.project)
    },
    yaxis: {
      title: {
        text: 'Hours'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " hours"
        }
      }
    },
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
  }

  const series = [{
    name: 'Hours Tracked',
    data: data.map(item => item.hours)
  }]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  )
} 