import React from 'react'
import { Layout } from '@components/layouts/Layout'
import { Form, TextField } from "@components/Inputs"
import Container from '@components/Container'

export default function ProjectsNew() {
  return (
    <Layout>
      <Container>
        <div className="my-16">
          <h1 className="text-2xl font-bold mb-4">New Project</h1>
          <Form action="/projects" method="post">
            <TextField label="Name" name="project[name]" />
            <TextField label="Description" name="project[description]" />
            <button type="submit">Create Project</button>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}