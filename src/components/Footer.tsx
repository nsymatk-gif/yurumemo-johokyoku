export default function Footer() {
  return (
    <footer className="mt-auto">
      <div
        className="max-w-2xl mx-auto px-6 py-10"
        style={{ borderTop: '1px solid #E0DDD8' }}
      >
        <p className="text-xs text-center" style={{ color: '#AAAAAA' }}>
          © {new Date().getFullYear()} ゆるめも情報局
        </p>
      </div>
    </footer>
  )
}
