import React from 'react'
import Chart from 'react-apexcharts'

export default function ProjectDistributionChart({ data, title = "Project Distribution" }) {
  const options = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: data.map(item => item.project),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899'],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " hours"
        }
      }
    }
  }

  const series = data.map(item => item.hours)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  )
} 