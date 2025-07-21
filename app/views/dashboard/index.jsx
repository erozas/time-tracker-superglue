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
  const data = useContent().data.dashboard_data

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
              title="Hours This Month"
              value={data.stats.total_hours_this_month}
              subtitle="vs 148 last month"
              icon={<Clock />}
              color="blue"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              title="Earnings This Month"
              value={`$${data.stats.total_earnings_this_month.toLocaleString()}`}
              subtitle="vs $7,200 last month"
              icon={<DollarSign />}
              color="green"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              title="Active Projects"
              value={data.stats.active_projects}
              subtitle="3 due this week"
              icon={<Folder />}
              color="purple"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <StatsCard
              title="Avg. Hourly Rate"
              value={`$${data.stats.average_hourly_rate}`}
              subtitle="+$5 from last month"
              icon={<TrendingUp />}
              color="yellow"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-8">
            <DailyHoursChart data={data.daily_hours} title="This Week's Hours" />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-8">
            <EarningsChart data={data.earnings_over_time} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}