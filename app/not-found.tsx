import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl text-lg shadow-2xl hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
