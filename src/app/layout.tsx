import Header from './components/Header/Header'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html >
      <body>{children}</body>
    </html>
  )
}
