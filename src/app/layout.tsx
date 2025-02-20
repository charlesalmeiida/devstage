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
      <body className="bg-gray-900 antialiased bg-[url(/background.png)] bg-no-repeat bg-top text-gray-100 md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
