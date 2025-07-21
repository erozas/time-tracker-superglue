import React from 'react'
import AppSidebar from "../layouts/AppSidebar"
import AppNavbar from "../navigation/AppNavbar"
import Flash from "../Flash"

export const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="flex">
        <AppSidebar />
        <main className="w-full">
          <AppNavbar />
          <Flash />
          {children}
        </main>
      </div>
    </div>
  )
}