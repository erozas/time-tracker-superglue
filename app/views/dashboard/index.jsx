import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { AppLayout } from '../../frontend/components/layouts/AppLayout'
import { Folder, Clock, DollarSign, TrendingUp } from 'lucide-react'
import { useSelector } from 'react-redux'
import {
  EarningsChart,
  DailyHoursChart,
  StatsCard
} from '../../frontend/components/charts'

export default function DashboardIndex() {
  const user = useSelector((state) => state.user)
  const {
    hoursThisMonth,
    earningsThisMonth,
    activeProjects,
    avgHourlyRate,
    dailyHours,
    earningsOverTime
  } = useContent()

  return (
    <AppLayout>
      <div className="py-6 px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.username}. Here's your freelance activity overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-12 w-full gap-x-6 gap-y-6 mb-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard 
              {...hoursThisMonth}
              refresh={true}
              refreshPath="/dashboard?props_at=data.hoursThisMonth"
              icon={<Clock />}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              {...earningsThisMonth}
              icon={<DollarSign />}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              {...activeProjects}
              icon={<Folder />}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              {...avgHourlyRate}
              icon={<TrendingUp />}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-8">
            <DailyHoursChart data={dailyHours} title="This Week's Hours" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-8">
            <EarningsChart data={earningsOverTime} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}