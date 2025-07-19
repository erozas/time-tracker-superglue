import React from 'react'

const Pagination = ({ pagination, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-4 ${className}`}>
      {pagination.prevPage && (
        <a href={pagination.prevPage} data-sg-visit className="text-indigo-700 font-semibold">Previous</a>
      )}
      {pagination.nextPage && (
        <a href={pagination.nextPage} data-sg-visit className="text-indigo-700 font-semibold">Next</a>
      )}
    </nav>
  )
}

export default Pagination