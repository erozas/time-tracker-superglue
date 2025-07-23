import React from 'react'
import { useContent } from '@thoughtbot/superglue'
import { AppLayout } from "../../../frontend/components/layouts/AppLayout"

export default function DashboardPostsIndex() {
  const posts = useContent().data.posts
  console.log(posts)

  return (
    <AppLayout>
      <div className="w-full px-8 mt-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="grid grid-cols-12 gap-4">
          {posts.map((post) => (
            <div className="col-span-4" key={post.id}>
              <div className="w-full py-4">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p className="text-sm text-zinc-500 h-16 overflow-hidden">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}