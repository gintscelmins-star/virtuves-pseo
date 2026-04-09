import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Iebūvējamās Virtuves',
    default: 'Iebūvējamās Virtuves pēc Pasūtījuma Latvijā',
  },
  description: 'Iebūvējamās virtuves, garderobes un skapji pēc individuāla pasūtījuma. Ražojam Latvijā.',
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
    <html lang="lv">
      <body>{children}</body>
    </html>
  )
}
