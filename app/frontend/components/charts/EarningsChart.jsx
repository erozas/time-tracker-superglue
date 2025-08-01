import React, { useEffect, useState } from 'react'

export default function EarningsChart({ data, title = "Earnings Over Time" }) {
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
      categories: data.map(item => item.period),
      type: 'category'
    },
    yaxis: {
      title: {
        text: 'Earnings ($)'
      },
      labels: {
        formatter: function (val) {
          return '$' + val.toLocaleString()
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
      y: {
        formatter: function (val) {
          return '$' + val.toLocaleString()
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    colors: ["#5b6995"]
  }

  const series = [{
    name: 'Earnings',
    data: data.map(item => item.amount)
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