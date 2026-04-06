import { notFound } from 'next/navigation'
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
      <header className="mb-8">
        <time className="text-sm text-gray-400">{post.date}</time>
        <h1 className="mt-2 text-3xl font-bold leading-snug">{post.title}</h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
      />
    </article>
  )
}
