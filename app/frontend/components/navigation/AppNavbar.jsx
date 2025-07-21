import React, { useContext, useRef } from 'react'
import { NavigationContext, useContent } from '@thoughtbot/superglue'
import { Search, X } from 'lucide-react'
import { debounce } from '../../utils'
import { useSelector } from 'react-redux'

const AppNavbar = () => {
  const { remote } = useContext(NavigationContext)
  const currentPageKey = useSelector(state => state.superglue.currentPageKey)
  const searchResults = useContent().search?.results || []

  const debouncedSearch = useRef(
    debounce((value) => {
      remote(`/dashboard?q=${value}&props_at=data.search.results`, {
        pageKey: currentPageKey,
        force: true
      })
    }, 250)
  ).current

  const handleSearch = (e) => {
    const value = e.target.value
    debouncedSearch(value)
  }

  return (
    <div className="w-full bg-white px-8 py-4 border-b border-zinc-200">
      <div className="w-1/3 border border-neutral-300 rounded-full relative focus:outline-none">
        <input type="text" className="w-full pl-8 py-1.5 focus:outline-none" placeholder="Search projects" onChange={handleSearch} />
        <Search className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400" />
        {searchResults.length > 0 && (
          <div className="w-full absolute top-12 rounded-lg bg-white px-4 py-4 border border-zinc-200 z-10 shadow-lg">
            <h4 className="text-base font-semibold text-gray-900">Results</h4>
            <ul>
              {searchResults.map((result) => (
                <li className="text-gray-700" key={result.id}>
                  <a href={result.url} className="hover:underline">{result.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {searchResults.length > 0 && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
            <X className="w-5 h-5 text-zinc-400" onClick={handleSearch} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AppNavbar