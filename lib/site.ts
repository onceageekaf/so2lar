/**
 * Canonical site origin for metadata (Open Graph, etc.).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 * On Vercel, VERCEL_URL is used when the public URL is not set.
 */
export function getBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}
