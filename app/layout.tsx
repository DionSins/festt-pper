import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Festaepper - Mediterranean Carpet Rental',
  description: 'Rent beautiful Mediterranean carpets for your events and parties',
  keywords: 'carpet rental, event decoration, mediterranean, parties',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
