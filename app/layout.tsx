import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { PrivyProviderWrapper } from '@/components/providers/privy-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PROOF OF STAKE | Devconnect 2025 Buenos Aires',
  description: 'The ultimate steak leaderboard from Devconnect 2025 Buenos Aires. AI consensus making sure doneness of steak.',
  generator: 'v0.app',
  metadataBase: new URL('https://proofofsteak.fun'),
  openGraph: {
    title: 'PROOF OF STAKE',
    description: 'AI consensus making sure doneness of steak',
    url: 'https://proofofsteak.fun',
    siteName: 'PROOF OF STAKE',
    images: [
      {
        url: '/hero-steak-hd.jpg',
        width: 1200,
        height: 630,
        alt: 'Proof of Stake - Devconnect 2025 Buenos Aires',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROOF OF STAKE',
    description: 'AI consensus making sure doneness of steak',
    images: ['/hero-steak-hd.jpg'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🥩</text></svg>",
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <PrivyProviderWrapper>
          {children}
        </PrivyProviderWrapper>
      </body>
    </html>
  )
}
