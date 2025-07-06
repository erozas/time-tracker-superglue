import React from 'react'
import { useContent } from '@thoughtbot/superglue';

export default function GreetsShow() {
  const {
    body,
    title,
    footer
  } = useContent()

  const { greet } = body

  return (
    <>
      <h1>{greet}</h1>
      <p>{title}</p>
      <span>{footer}</span>
    </>
  )
}