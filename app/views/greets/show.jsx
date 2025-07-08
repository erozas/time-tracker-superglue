import React from 'react'
import { useContent } from '@thoughtbot/superglue';
import { Layout } from '@components/layouts/Layout';
import Container from '@components/Container';

export default function GreetsShow() {
  const {
    body,
    title,
    footer
  } = useContent()

  const { greet } = body

  return (
    <Layout>
      <Container>
        <div className="my-24">
          <h1>{greet} and september</h1>
          <p>{title}</p>
          <span>{footer}</span>
        </div>
      </Container>
    </Layout>
  )
}