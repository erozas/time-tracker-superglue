import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { Layout } from '@components/layouts/Layout'
import Container from '@components/Container'

export default function ProjectsIndex() {
  const { projects } = useContent()

  return (
    <Layout>
      <Container>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="border border-gray-300 rounded-lg p-4">
                <a href={project.url} className="text-lg font-semibold">{project.name}</a>
                <p className="text-sm text-slate-500">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Layout>
  )
}