import "./globals.css"

import type { Metadata } from "next"
import { Montserrat, Oxanium } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600"],
})

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "devstage",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${oxanium.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}
