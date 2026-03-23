import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Geist } from "next/font/google"

import { getBaseUrl } from "@/lib/site"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-sans",
})

const titleDefault = "Dye-Sensitized Oxygen Sensor | ETH Zurich"
const description =
  "A high-performance chemiresistive sensor for rapid, selective oxygen detection under visible light."

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: titleDefault,
    template: "%s | ETH Zurich",
  },
  description,
  applicationName: "so2lar",
  authors: [{ name: "ETH Zurich" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: titleDefault,
    title: titleDefault,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
