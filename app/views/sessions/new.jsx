import React from 'react'
import { useContent } from "@thoughtbot/superglue"
import { Layout } from '../../frontend/components/layouts/Layout'
import Container from '../../frontend/components/Container'
import { Form, FieldBase, SubmitButton } from '../../frontend/components/Inputs'


export default function SessionsNew() {
  const { form, extras, inputs } = useContent().login_form

  return (
    <Layout>
      <Container>
        <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-8 mt-16 mb-24">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-base text-slate-500 mb-4">
            Enter your email address and password to sign in.
          </p>
          <Form {...form} extras={extras} className="flex flex-col">
            <div className="flex flex-col space-y-2">
              <FieldBase {...inputs.emailAddress} label="Email address" className="px-3 py-2 border border-gray-300 rounded-lg" />
              <FieldBase {...inputs.password} label="Password" className="px-3 py-2 border border-gray-300 rounded-lg" />
              <SubmitButton text="Sign in" className="bg-indigo-700 text-white font-semibold mt-6 py-2 px-6 rounded-full" />
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}