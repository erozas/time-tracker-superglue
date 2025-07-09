import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { Layout } from '@components/layouts/Layout'
import Container from '@components/Container'
import Post from './Post'

export default function PostsIndex() {
  const { posts } = useContent()

  return (
    <Layout>
      <div className="bg-indigo-200 text-center py-12">
        <h1 className="text-4xl font-semibold text-indigo-900 mb-2">Freelancing on Rails</h1>
        <p className="text-indigo-800 text-lg max-w-2xl mx-auto">
          Thoughts, stories and ideas about freelancing and how to get started.
        </p>
      </div>
      <Container>
        <div className="py-12">
          {/* Posts List */}
          <div className="w-full grid grid-cols-12 gap-x-6 gap-y-8">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No posts yet.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  )
}