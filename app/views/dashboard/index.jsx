import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { AppLayout } from '../../frontend/components/layouts/AppLayout'
import { useSelector } from 'react-redux'

export default function DashboardIndex() {
  const user = useSelector((state) => state.user)
  const data = useContent().data.dashboard_data

  return (
    <AppLayout>
      <div className="py-6 px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.username}. Here's your freelance activity overview.</p>
        </div>
      </div>
    </AppLayout>
  )
}