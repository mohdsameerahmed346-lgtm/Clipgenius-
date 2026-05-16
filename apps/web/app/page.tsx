import Link from 'next/link'

const features = [
  {
    title: 'AI Clip Detection',
    description:
      'Automatically detect engaging moments from podcasts, webinars, and long-form videos.',
  },
  {
    title: 'Auto Captions',
    description:
      'Generate modern animated captions optimized for YouTube Shorts, Reels, and TikTok.',
  },
  {
    title: '9:16 Exports',
    description:
      'Convert horizontal videos into clean vertical shorts with smart reframing.',
  },
  {
    title: 'Faceless Creator Templates',
    description:
      'Use Reddit-style, motivation, gaming, and storytelling templates instantly.',
  },
]

const pricing = [
  {
    name: 'Free',
    price: '₹0',
    description: 'Perfect for testing ClipGenius AI',
    features: [
      '30 credits/month',
      '720p exports',
      'Watermark enabled',
      '3 exports/day',
    ],
  },
  {
    name: 'Creator',
    price: '₹299',
    description: 'Best for growing creators',
    features: [
      '200 credits/month',
      '1080p exports',
      'No watermark',
      '20 exports/day',
      'Templates + hooks',
    ],
  },
  {
    name: 'Pro',
    price: '₹999',
    description: 'Built for agencies and power users',
    features: [
      '1000 credits/month',
      'Priority rendering',
      'Batch exports',
      'Advanced templates',
      '100 exports/day',
    ],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-tight">
            ClipGenius AI
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-white/40"
            >
              Dashboard
            </Link>

            <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90">
              Start Free
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
          <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            AI Shorts Generator For Faceless Creators
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Turn Long Videos Into Viral Shorts Automatically
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl">
            Upload podcasts, YouTube videos, webinars, and coaching content.
            ClipGenius AI detects engaging moments, adds captions, and exports
            vertical shorts in minutes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Start Free
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-white/40">
              Watch Demo
            </button>
          </div>

          <div className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-black/70 p-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                  <div className="text-sm text-white/50">Upload</div>
                  <div className="mt-3 text-lg font-semibold">
                    1-Hour Podcast.mp4
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                  <div className="text-sm text-white/50">AI Clips Found</div>
                  <div className="mt-3 text-lg font-semibold">12 Shorts</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                  <div className="text-sm text-white/50">Export Format</div>
                  <div className="mt-3 text-lg font-semibold">1080p Vertical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Everything Needed To Repurpose Content</h2>
          <p className="mt-4 text-white/60">
            A fast workflow designed for creators, coaches, podcasters, and
            agencies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
          <p className="mt-4 text-white/60">
            Start free and scale as your content grows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="text-xl font-semibold">{plan.name}</div>

              <div className="mt-4 text-5xl font-bold">
                {plan.price}
                <span className="text-lg text-white/50">/month</span>
              </div>

              <p className="mt-4 text-white/60">{plan.description}</p>

              <div className="mt-8 space-y-3 text-sm text-white/70">
                {plan.features.map((feature) => (
                  <div key={feature}>✓ {feature}</div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center">
          <h2 className="max-w-3xl text-4xl font-bold">
            Turn One Video Into Weeks Of Short-Form Content
          </h2>

          <p className="mt-5 max-w-2xl text-white/60">
            Upload once. Generate multiple clips. Export vertical content for
            every platform.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Creating
          </button>
        </div>
      </section>
    </main>
  )
  }
