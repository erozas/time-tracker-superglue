import React from 'react'

export default function Post({ post }) {
  return (
    <article
      key={post.id}
      className="col-span-12 md:col-span-6 lg:col-span-4 border-b border-gray-100 pb-12 last:border-b-0"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 hover:text-indigo-700 transition-colors">
        <a href={post.url} className="block">
          {post.title}
        </a>
      </h2>
      {post.excerpt && (
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          {post.excerpt}
        </p>
      )}
      <div className="flex items-center text-sm text-gray-500">
        <a
          href={`/posts/${post.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Read more →
        </a>
      </div>
    </article>
  )
} 