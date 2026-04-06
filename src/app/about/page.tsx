import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'このブログについて',
}

export default function AboutPage() {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: '#3B7A57' }}>
        About
      </p>

      <h1 className="text-2xl font-bold mb-6 tracking-tight">このブログについて</h1>

      <p className="text-sm leading-loose" style={{ color: '#555555' }}>
        「ゆるめも情報局」は、日々の気づきや役立つ情報をゆるっと発信するブログです。
      </p>
    </div>
  )
}
