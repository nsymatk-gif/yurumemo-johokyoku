import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'このブログについて',
}

export default function AboutPage() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8">
      <h1 className="text-2xl font-bold mb-6">このブログについて</h1>
      <p className="text-gray-600 leading-relaxed">
        「ゆるめも情報局」は、日々の気づきや役立つ情報をゆるっと発信するブログです。
      </p>
    </div>
  )
}
