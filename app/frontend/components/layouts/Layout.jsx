import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../navigation/Navbar'

export const Layout = ({ children }) => {
  const flash = useSelector((state) => state.flash)

  return (
    <div>
      <Navbar />
      {flash.success && <p>{flash.success}</p>}
      {flash.notice && <p>{flash.notice}</p>}
      {flash.error && <p>{flash.error}</p>}

      {children}
    </div>
  )
}
