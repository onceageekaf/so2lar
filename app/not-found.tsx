import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600 text-center text-sm max-w-md">
        The page you requested does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-teal-600 hover:text-teal-700"
      >
        Back to home
      </Link>
    </main>
  )
}
