import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebhookShield — Guarantee Webhook Delivery with Retries',
  description: 'Proxy webhooks with guaranteed delivery, exponential backoff, dead letter queues, and delivery analytics. Built for SaaS developers and API-first companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a5b5b5a-4a56-43a9-a8b3-b94fcfb3e0ae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
