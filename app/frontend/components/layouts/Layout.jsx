import React from 'react'
import Navbar from '../navigation/Navbar'
import Flash from '../Flash'
import Footer from '../navigation/Footer'

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
