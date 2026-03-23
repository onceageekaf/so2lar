/**
 * Canonical site origin for metadata (Open Graph, metadataBase, etc.).
 * Set NEXT_PUBLIC_SITE_URL on Vercel (e.g. https://so2lar.ttos.ai or so2lar.ttos.ai).
 * If the scheme is omitted, https:// is assumed. Surrounding quotes are stripped.
 * On Vercel, VERCEL_URL is used when NEXT_PUBLIC_SITE_URL is unset or invalid.
 */
function stripQuotes(s: string): string {
  const t = s.trim()
  if (t.length >= 2) {
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      return t.slice(1, -1).trim()
    }
  }
  return t
}

function normalizePublicSiteUrl(raw: string | undefined): string | null {
  if (raw == null) return null
  let trimmed = stripQuotes(raw).replace(/\/$/, "")
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

/**
 * Safe for `metadataBase` — never throws (Next fails the whole build if metadataBase throws).
 */
export function getMetadataBaseUrl(): URL {
  const tryParse = (s: string): URL | null => {
    try {
      return new URL(s)
    } catch {
      return null
    }
  }

  const candidates = [
    normalizePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
    getBaseUrl(),
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
    "http://localhost:3000",
  ].filter((x): x is string => Boolean(x))

  for (const c of candidates) {
    const u = tryParse(c) ?? tryParse(c.startsWith("http") ? c : `https://${c.replace(/\/$/, "")}`)
    if (u) return u
  }

  return new URL("http://localhost:3000")
}
