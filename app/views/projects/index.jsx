import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { AppLayout } from '../../frontend/components/layouts/AppLayout'
import Link from '../../frontend/components/ui/Link'
import Pagination from '../../frontend/components/navigation/Pagination'

export default function ProjectsIndex() {
  const { projects, newProjectPath, pagination } = useContent()

  console.log(useContent())

  return (
    <AppLayout>
      <div className="px-8 mt-12 mb-20">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <a href={newProjectPath} data-sg-visit>New Project</a>
        </div>
        <ul className="space-y-4 mt-2">
          {projects.map((project, index) => (
            <li key={index.toString()} className="border border-gray-300 rounded-lg p-4">
              <Link
                href={project.url}
                visit
                variant="inherit"
                size="lg"
                weight="semibold"
                className="text-lg font-semibold"
              >
                {project?.name}
              </Link>
              <p className="text-sm text-slate-500">{project?.description}</p>
            </li>
          ))}
        </ul>
        <Pagination pagination={pagination} className="mt-6" />
      </div>
    </AppLayout>
  )
}