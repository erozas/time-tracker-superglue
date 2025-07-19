import React, { useState, useContext } from 'react'
import { useContent, NavigationContext } from '@thoughtbot/superglue'
import { AppLayout } from '../../frontend/components/layouts/AppLayout'
import { Form, FieldBase, TextArea, SubmitButton } from "../../frontend/components/Inputs"
import { Plus, Trash2 } from 'lucide-react'

export default function ProjectsNew() {
  const { form, extras, inputs, errors } = useContent().new_project_form
  const { remote } = useContext(NavigationContext)

  console.log(inputs)
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-8 mt-16 mb-24">
        <h1 className="text-2xl font-bold mb-4">New Project</h1>
        <Form {...form} extras={extras} validationErrors={errors} className="flex flex-col">
          <div className="flex flex-col space-y-2">
            <FieldBase {...inputs.name} errorKey="name" label="Name" className="px-3 py-2 border border-gray-300 rounded-lg" />
            <TextArea {...inputs.description} placeholder="Describe the project in a few words" label="Description" className="px-3 py-2 border border-gray-300 rounded-lg placeholder:text-sm" />
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Tasks</h2>
                <a data-sg-remote="true" href="/projects/add_task" className="text-indigo-800 font-semibold px-2 flex items-center space-x-1">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add task</span>
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                {inputs.tasksAttributes.map((task, index) => (
                  <div className="flex flex-row space-x-1 items-center" key={index}>
                    <FieldBase {...task.title} errorKey="title" placeholder="Task Title" className="px-3 py-2 border border-gray-300 rounded-lg" />
                    <FieldBase {...task.allotedTime} type="number" errorKey="allotedTime" placeholder="Alloted Time" className="px-3 py-2 border border-gray-300 rounded-lg" />
                    <button className="text-gray-500 cursor-pointer">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SubmitButton text="Create Project" className="bg-indigo-700 text-white font-semibold mt-8 py-2 px-6 rounded-full" />
        </Form>
      </div>
    </AppLayout>
  )
}