import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Iebūvējāmās Virtuves',
    default: 'Iebūvējāmās Virtuves pēc Pasūtījuma Latvijā',
  },
  description: 'Iebūvējāmās virtuves, garderobes un skapji pēc individuāla pasūtījuma. Ražojam Latvijā.',
  metadataBase: new URL('https://pseo.iebuvejamasvirtuves.lv'),
  verification: {
    google: 'WoGouaWNuhECL9rx-lUAl4q8FldIDYZp7MKOUEmsK8c',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lv" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-brand-light text-brand-dark font-inter antialiased">
        {children}
      </body>
      <GoogleAnalytics gaId="G-TFY7B8EE04" />
    </html>
  )
}
