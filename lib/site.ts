/**
 * Canonical site origin for metadata (Open Graph, metadataBase, etc.).
 * Set NEXT_PUBLIC_SITE_URL on Vercel (e.g. https://so2lar.ttos.ai or so2lar.ttos.ai).
 * If the scheme is omitted, https:// is assumed.
 * On Vercel, VERCEL_URL is used when NEXT_PUBLIC_SITE_URL is unset.
 */
function normalizePublicSiteUrl(raw: string | undefined): string | null {
  if (raw == null) return null
  const trimmed = raw.trim().replace(/\/$/, "")
  if (!trimmed) return null
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export function getBaseUrl(): string {
  const fromEnv = normalizePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}
