import React from 'react'
import { Layout } from '@components/layouts/Layout'
import Container from '@components/Container'
import { Form, TextField } from '@components/Inputs'
import { useContent, Navigationcontext } from "@thoughtbot/superglue"


export default function SessionsNew() {
  return (
    <Layout>
      <Container>
        <h1>Sign in</h1>

        <Form action={"/session"} method="post">
          <TextField label="Email" className="px-3 py-2 border border-slate-200 rounded-md" errorKey="email_address" />
          <TextField label="Password" className="px-3 py-2 border border-slate-200 rounded-md" errorKey="password" />
          <button type="submit">Sign in</button>
        </Form>
      </Container>
    </Layout>
  )
}