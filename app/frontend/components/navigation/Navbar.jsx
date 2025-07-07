import React from 'react'
import Container from '@components/Container'
import Logo from '@components/Logo'

export default function Navbar() {
  return (
    <nav className="bg-indigo-950">
      <Container>
        <ul className="flex items-center justify-between gap-4 py-4">
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
            <li>
              <a href="/session/new" data-sg-visit>Sign in</a>
            </li>
          </div>
        </ul>
      </Container>
    </nav>
  )
}