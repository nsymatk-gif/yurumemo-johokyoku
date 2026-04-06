import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: PageProps<'/posts/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function PostPage(props: PageProps<'/posts/[slug]'>) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article>
      <div className="mb-10">
        <Link
          href="/"
          className="text-xs transition-colors hover:text-[#3B7A57]"
          style={{ color: '#AAAAAA' }}
        >
          ← 記事一覧へ
        </Link>
      </div>

      <header className="mb-10" style={{ borderBottom: '1px solid #E0DDD8', paddingBottom: '2rem' }}>
        <time className="text-xs" style={{ color: '#AAAAAA' }}>
          {post.date}
        </time>
        <h1 className="mt-3 text-3xl font-bold leading-snug tracking-tight">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex gap-2 flex-wrap">
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
      </header>

      <div
        className="prose prose-gray max-w-none"
        style={{ color: '#333333' }}
        dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
      />
    </article>
  )
}
