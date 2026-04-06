import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          ゆるめも情報局
        </Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">このブログについて</Link>
        </nav>
      </div>
    </header>
  )
}
