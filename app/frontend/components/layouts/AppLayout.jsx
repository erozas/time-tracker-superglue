import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '@components/navigation/Navbar'
import AppSidebar from '@components/layouts/AppSidebar'
import Flash from '@components/Flash'

export const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="flex">
        <AppSidebar />
        <main className="w-full">
          <Flash />
          {children}
        </main>
      </div>
    </div>
  )
}