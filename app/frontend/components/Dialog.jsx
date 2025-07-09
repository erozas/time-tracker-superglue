import React from 'react'

export const Dialog = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => history.back()}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-200 ease-out">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}