import React from 'react'
import { RefreshCcw } from 'lucide-react'
import { useContent } from '@thoughtbot/superglue'

export default function StatsCard({ title, value, refresh = false, refreshPath, icon, color = "blue" }) {
  const data = useContent().data.dashboard_data

  const backgroundColorClasses = {
    blue: "bg-dodger-200",
    green: "bg-emerald-200",
    yellow: "bg-amber-200",
    red: "bg-rose-200",
    purple: "bg-indigo-200"
  }

  const textColorClasses = {
    blue: "text-dodger-600",
    green: "text-emerald-600",
    yellow: "text-amber-600",
    red: "text-rose-600",
    purple: "text-indigo-600"
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs">
      <div className="flex items-center">
        <div className="flex relative h-10 w-10 items-center justify-center">
          <div className={`w-full h-full absolute top-0 left-0 blur-sm rounded-lg ${backgroundColorClasses[color]}`}>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center z-10 ${textColorClasses[color]}`}>
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          <p className="text-sm font-medium text-gray-500">{title}</p>
        </div>
        {refresh && (
          <a href={refreshPath} className="ml-12 flex items-center space-x-2" data-sg-remote>
            <RefreshCcw className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-500">Refresh</span>
          </a>
        )}
      </div>
    </div>
  )
} 