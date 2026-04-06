import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-gray-800">最新の記事</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">まだ記事がありません。</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <time className="text-sm text-gray-400">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold">
                <Link href={`/posts/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{post.description}</p>
              )}
              {post.tags.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
