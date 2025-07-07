import React from 'react'
import Navbar from '@components/navigation/Navbar'
import Flash from '@components/Flash'
import Footer from '@components/navigation/Footer'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Flash />

      {children}
      <Footer />
    </div>
  )
}
