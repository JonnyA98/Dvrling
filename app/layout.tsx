import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DVRLING',
  description: 'Authentic, accessible, and attainable healthy eating.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto">
            <Link href='/blog'><h1 className="text-2xl font-bold">DVRLING</h1></Link>
          </div>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <footer className="bg-muted py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 DVRLING. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
