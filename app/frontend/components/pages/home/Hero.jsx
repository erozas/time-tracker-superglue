import React from 'react'
import Container from '@components/Container'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10 py-12 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200/50 rounded-full px-3 py-1 mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-600">Don't lose track again</span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-indigo-900 mb-2 leading-12">
              Simple and Accurate<span className="text-indigo-600">Time Tracking for freelancers</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Track projects, celebrate milestones, and stay focused with an integrated Pomodoro timer.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl text-base transition-all duration-400 shadow-lg hover:shadow-xl">
                Create an account
              </button>
              <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-semibold py-3 px-6 rounded-xl text-base transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:shadow-md">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}