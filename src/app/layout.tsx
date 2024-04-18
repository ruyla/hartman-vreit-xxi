import '../styles/globals.css'
import { RALEWAY } from '../styles/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.hartman-properties.com'
  },
  authors: [{ name: 'ruyla', url: 'https://github.com/ruyla' }],
  category: 'Commercial',
  colorScheme: 'light',
  creator: '',
  description: 'A single-page application built with Next13.',
  generator: 'Next.js',
  icons: {

  },
  keywords: ['HTML', 'CSS', 'JavaScript', 'JS', 'React', 'Next.js', 'Tailwind', 'TailwindCSS', 'MongoDB'],
  manifest: '',
  metadataBase: new URL('https://www.hartman-properties.com'),
  openGraph: {
    title: 'Hartman VReit XXI',
    description: 'One of the leading commercial real estate management companies in Texas.',
    url: 'https://www.hartman-properties.com',
    siteName: 'Hartman VReit XXI',
    locale: 'en_US',
    type: 'website',
  },
  publisher: 'Vercel',
  referrer: 'origin',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      "max-video-preview": -1
    }
  },
  themeColor: '#FFFFFF',
  title: {
    default: 'Hartman VReit XXI',
    template: '%s | Hartman VReit XXI'
  },
  viewport: {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${RALEWAY.className}`}>
        {children}
      </body>
    </html>
  )
}