import React, { useContext, useRef } from 'react'
import { NavigationContext, useContent } from '@thoughtbot/superglue'
import SearchBar from '../SearchBar'
import Pomodoro from "../../assets/pomodoro.svg"
import { debounce } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import { increment, selectPomodoroCount } from '../../slices/pomodoro'

const AppNavbar = () => {
  const { remote } = useContext(NavigationContext)
  const currentPageKey = useSelector(state => state.superglue.currentPageKey)
  const searchResults = useContent().search?.results || []
  const dispatch = useDispatch()
  const completedPomodoros = useSelector(selectPomodoroCount)

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

  const incrementPomodoro = () => {
    dispatch(increment())
  }

  return (
    <div className="w-full bg-white px-8 py-4 border-b border-zinc-200">
      <div className="w-full items-center justify-between flex">
        <SearchBar onChange={handleSearch} results={searchResults} />

        <div className="flex items-center gap-2 cursor-pointer" onClick={incrementPomodoro}>
          <img src={Pomodoro} alt="Pomodoro" className="w-8 h-8 fill-red-600" />
          <span className="text-indigo-950">{completedPomodoros} completed today</span>
        </div>
      </div>
    </div>
  )
}

export default AppNavbar