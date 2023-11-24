import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: 'Travelia - Explore the world',
  description: 'This is a travel html template made by codewithsadee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
