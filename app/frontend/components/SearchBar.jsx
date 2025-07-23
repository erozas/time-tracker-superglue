import React from 'react'
import { Search, X } from 'lucide-react'

export default function SearchBar({ onChange, results }) {

  return (
    <div className="w-1/3 border border-neutral-300 rounded-full relative focus:outline-none">
      <input type="text" className="w-full pl-8 py-1.5 focus:outline-none" placeholder="Search projects" onChange={onChange} />
      <Search className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400" />
      {results.length > 0 && (
        <div className="w-full absolute top-12 rounded-lg bg-white px-4 py-4 border border-zinc-200 z-10 shadow-lg">
          <h4 className="text-base font-semibold text-gray-900">Results</h4>
          <ul>
            {results.map((result) => (
              <li className="text-gray-700" key={result.id}>
                <a href={result.url} className="hover:underline">{result.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {results.length > 0 && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
          <X className="w-5 h-5 text-zinc-400" onClick={onChange} />
        </div>
      )}
    </div>
  )
}