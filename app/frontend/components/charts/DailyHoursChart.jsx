import React, { useEffect, useState } from 'react'

export default function DailyHoursChart({ data, title = "Daily Hours Tracked" }) {
  const [Chart, setChart] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-apexcharts').then((module) => {
        setChart(() => module.default)
      })
    }
  }, [])

  const options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: data.map(item => item.date),
      type: 'category'
    },
    yaxis: {
      title: {
        text: 'Hours'
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
      y: {
        formatter: function (val) {
          return val + " hours"
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      position: 'back'
    },
    colors: ['#af54f2'],
    markers: {
      size: 4,
      colors: ['#af54f2'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7
      }
    }
  }

  const series = [{
    name: 'Hours',
    data: data.map(item => item.hours)
  }]

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {Chart ? (
        <Chart options={options} series={series} type="area" height={350} />
      ) : (
        <div className="h-[350px] flex items-center justify-center text-gray-500">
          Loading chart...
        </div>
      )}
    </div>
  )
} 