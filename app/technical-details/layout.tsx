import type { ReactNode } from "react"
import type { Metadata } from "next"

const techTitle = "Technical specifications"
const techDescription =
  "Interactive figures and technical documentation for the dye-sensitized oxygen sensor (ETH Zurich, Advanced Science 2024)."

export const metadata: Metadata = {
  title: techTitle,
  description: techDescription,
  openGraph: {
    title: `${techTitle} | ETH Zurich`,
    description: techDescription,
  },
  twitter: {
    title: `${techTitle} | ETH Zurich`,
    description: techDescription,
  },
}

export default function TechnicalDetailsLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
