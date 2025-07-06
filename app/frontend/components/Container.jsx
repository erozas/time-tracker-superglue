import React from 'react'

export default function Container({ children }) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {children}
    </div>
  )
}