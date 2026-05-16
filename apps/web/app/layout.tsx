import './globals.css'

export const metadata = {
  title: 'ClipGenius AI',
  description: 'AI Shorts Generator For Faceless Creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
