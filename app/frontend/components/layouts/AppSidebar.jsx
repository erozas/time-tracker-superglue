import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../Logo'
import { Folder, List, Settings, LogOut, Newspaper } from 'lucide-react'
import { Form } from '../Inputs'

export default function AppSidebar() {
  const user = useSelector((state) => state.user)
  const { form, extras } = user.sign_out_form

  return (
    <aside className="min-w-64 relative bg-indigo-900 shadow-sm min-h-[calc(100vh)]">
      <nav>
        <div className="p-4">
          <Logo />
        </div>
        <ul className="space-y-2">
          <li className="px-4 py-2 hover:bg-indigo-800">
            <a
              href="/dashboard"
              data-sg-visit
              className="flex items-center py-2 text-indigo-200 rounded-lg transition-colors"
            >
              <Folder className="w-5 h-5 mr-3" />
              Dashboard
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-800">
            <a
              href="/projects"
              data-sg-visit
              className="flex items-center py-2 text-indigo-200 rounded-lg transition-colors"
            >
              <List className="w-5 h-5 mr-3" />
              Projects
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-800">
            <a
              href="/dashboard/posts"
              data-sg-visit
              className="flex items-center py-2 text-indigo-200 rounded-lg transition-colors"
            >
              <Newspaper className="w-5 h-5 mr-3" />
              Posts
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-indigo-800">
            <a
              href="/settings"
              className="flex items-center py-2 text-indigo-200 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <section className="absolute px-4 hover:bg-indigo-800 bottom-0 w-full">
        <Form {...form} extras={extras} className="flex flex-col">
          <button type="submit" className="flex items-center px-2 pt-2 pb-6 text-indigo-200 rounded-lg transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Sign Out</span>
          </button>
        </Form>
      </section>
    </aside>
  )
}