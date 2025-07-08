import React from 'react'
import { AlarmClock } from 'lucide-react'

export default function Logo() {
  return (
    <a href="/" data-sg-visit>
      <h1 className="text-indigo-300 font-bold text-2xl tracking-wide flex items-center">
        <AlarmClock className="w-6 h-6 mr-2" />
        Pomoflow
      </h1>
    </a>
  )
}