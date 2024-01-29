import clsx from 'clsx'
import { Inter, Lexend } from 'next/font/google'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - StockBalance',
    default: 'StockBalance - Stock management made simple for small businesses',
  },
  description:
    'StockBalance - Stock management made simple for small businesses.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
