export default function Home() {
  const faqs = [
    {
      q: 'How does the retry mechanism work?',
      a: 'We use exponential backoff starting at 30 seconds, doubling each attempt up to 24 hours. Failed webhooks after 10 retries land in your dead letter queue for manual review.'
    },
    {
      q: 'Which webhook providers are supported?',
      a: 'Any HTTP/HTTPS endpoint. Point your existing webhook URL to our proxy and we handle the rest — Stripe, GitHub, Shopify, or your own services.'
    },
    {
      q: 'What happens if my endpoint is down for days?',
      a: 'Webhooks are durably stored and retried for up to 72 hours. You get Slack/email alerts and a dashboard to replay or dismiss events manually.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Webhook Reliability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Guarantee webhook delivery<br />
          <span className="text-[#58a6ff]">with automatic retries</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          WebhookShield proxies your outbound webhooks, queues them durably, and retries with exponential backoff. Never lose a critical event again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $15/mo
          </a>
          <a href="#faq" className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors">
            Learn more
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[['99.9%', 'Delivery rate'], ['10x', 'Retry attempts'], ['72h', 'Retention']].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for reliable webhook delivery</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited webhook endpoints',
              'Exponential backoff retries (up to 10x)',
              'Dead letter queue & manual replay',
              'Real-time delivery dashboard',
              'Slack & email failure alerts',
              '72-hour event retention',
              'HMAC signature verification'
            ].map(f => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started now
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} WebhookShield. All rights reserved.
      </footer>
    </main>
  )
}
