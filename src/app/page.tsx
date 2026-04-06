import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: '#3B7A57' }}>
        Latest
      </p>

      {posts.length === 0 ? (
        <p style={{ color: '#888888' }}>まだ記事がありません。</p>
      ) : (
        <ul>
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className="py-8"
              style={{ borderTop: i === 0 ? '1px solid #E0DDD8' : '1px solid #E0DDD8' }}
            >
              <time className="text-xs" style={{ color: '#AAAAAA' }}>
                {post.date}
              </time>

              <h2 className="mt-2 text-xl font-semibold leading-snug">
                <Link
                  href={`/posts/${post.slug}`}
                  className="transition-colors hover:text-[#3B7A57]"
                >
                  {post.title}
                </Link>
              </h2>

              {post.description && (
                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#666666' }}>
                  {post.description}
                </p>
              )}

              {post.tags.length > 0 && (
                <div className="mt-3 flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: '#EAF2EE', color: '#3B7A57' }}
                    >
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
