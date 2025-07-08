import React from 'react'
import Container from '@components/Container'
import Logo from '@components/Logo'
import { useContent } from '@thoughtbot/superglue'
import { Form, SubmitButton } from '@components/Inputs'

export default function Navbar() {
  const { user } = useContent()
  const { form, extras } = user.sign_out_form
  const signedIn = user?.is_authenticated

  console.log(useContent())

  return (
    <nav className="bg-indigo-950">
      <Container>
        <ul className="flex items-center justify-between gap-4 py-4 px-4 md:px-6">
          <li>
            <Logo />
          </li>

          <div className="flex items-center gap-4 text-indigo-100">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            {signedIn ? (
              <Form {...form} extras={extras} className="flex flex-col">
                <SubmitButton text="Sign out" className="bg-indigo-700 text-white font-semibold py-1.5 px-4 rounded-full" />
              </Form>
            ) : (
              <li>
                <a href="/session/new" data-sg-visit>Sign in</a>
              </li>
            )}
          </div>
        </ul>
      </Container>
    </nav >
  )
}