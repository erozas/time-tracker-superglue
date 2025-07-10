import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { Layout } from '../../frontend/components/layouts/Layout'
import Container from '../../frontend/components/Container'
import Link from '../../frontend/components/ui/Link'
import { ArrowLeftIcon } from 'lucide-react'

export default function PostShow() {
  const { post } = useContent()

  return (
    <Layout>
      <Container className="py-12 md:px-16">
        <div className="flex items-center space-x-2 mb-4">
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-800">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to posts
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-indigo-900 mb-2">{post.title}</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.body }} />
      </Container>
    </Layout>
  )
}