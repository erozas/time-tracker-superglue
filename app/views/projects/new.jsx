import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { AppLayout } from '../../frontend/components/layouts/AppLayout'
import { Form, FieldBase, TextArea, SubmitButton } from "../../frontend/components/Inputs"
import { Dialog } from '../../frontend/components/Dialog'

export default function ProjectsNew() {
  const { form, extras, inputs, errors } = useContent().new_project_form
  const { createProjectModal } = useContent()

  return (
    <AppLayout>
      <Dialog {...createProjectModal}>
        <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-8 mt-16 mb-24">
          <h1 className="text-2xl font-bold mb-4">New Project</h1>
          <Form {...form} extras={extras} validationErrors={errors} className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <FieldBase {...inputs.name} errorKey="name" label="Name" className="px-3 py-2 border border-gray-300 rounded-lg" />
              <TextArea {...inputs.description} placeholder="Describe the project in a few words" label="Description" className="px-3 py-2 border border-gray-300 rounded-lg placeholder:text-sm" />
            </div>
            <SubmitButton text="Create Project" className="bg-indigo-700 text-white font-semibold mt-6 py-2 px-6 rounded-full" />
          </Form>
        </div>
      </Dialog>
    </AppLayout>
  )
}