class DashboardController < ApplicationController
  before_action :use_jsx_rendering_defaults

  def index
    @dashboard_data = generate_dashboard_data
  end

  private

  def generate_dashboard_data
    # Generate realistic freelance time tracking data
    {
      stats: {
        total_hours_this_month: 72,
        total_earnings_this_month: 4050,
        active_projects: 3,
        average_hourly_rate: 65
      },
      project_time_tracking: [
        { project: "Avomart", hours: 25 },
        { project: "Avogram", hours: 18 },
        { project: "Avomail", hours: 12 },
        { project: "Avoviz", hours: 8 },
        { project: "Avoblog", hours: 19 }
      ],
      earnings_over_time: [
        { period: "Jan", amount: 3600 },
        { period: "Feb", amount: 3400 },
        { period: "Mar", amount: 1700 },
        { period: "Apr", amount: 1900 },
        { period: "May", amount: 2300 },
        { period: "Jun", amount: 4050 },
        { period: "Jul", amount: 4400 }
      ],
      daily_hours: [
        { date: "Mon", hours: 8.5 },
        { date: "Tue", hours: 7.2 },
        { date: "Wed", hours: 6.8 },
        { date: "Thu", hours: 8.0 },
        { date: "Fri", hours: 7.5 },
        { date: "Sat", hours: 4.2 },
        { date: "Sun", hours: 2.0 }
      ],
      recent_activity: [
        { project: "E-commerce Platform", task: "User authentication system", hours: 3.5, date: "2025-01-07" },
        { project: "Mobile App Design", task: "UI/UX wireframes", hours: 4.2, date: "2025-01-07" },
        { project: "Data Dashboard", task: "Chart implementation", hours: 2.8, date: "2025-01-06" },
        { project: "Marketing Website", task: "Landing page optimization", hours: 3.1, date: "2025-01-06" }
      ]
    }
  end
end