import Link from 'next/link'

const features = [
  {
    title: 'AI Viral Detection',
    desc: 'Detect high-energy moments automatically using AI transcript analysis.',
  },
  {
    title: 'Auto Captions',
    desc: 'Generate clean animated captions optimized for Shorts and Reels.',
  },
  {
    title: 'Faceless Templates',
    desc: 'Use ready-made templates for Reddit, storytelling, motivation, and gaming.',
  },
  {
    title: '9:16 Export',
    desc: 'Convert horizontal content into clean vertical short-form videos instantly.',
  },
]

const pricing = [
  {
    name: 'Free',
    price: '₹0',
    features: ['30 credits/month', '720p exports', 'Watermark', '3 exports/day'],
  },
  {
    name: 'Creator',
    price: '₹299',
    features: [
      '200 credits/month',
      '1080p exports',
      'No watermark',
      'Templates + hooks',
    ],
  },
  {
    name: 'Pro',
    price: '₹999',
    features: [
      '1000 credits/month',
      'Priority rendering',
      'Batch exports',
      'Premium templates',
    ],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_40%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            ClipGenius AI
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-white/40"
            >
              Dashboard
            </Link>

            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105">
              Start Free
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
              AI Shorts Generator For Faceless Creators
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Turn Long Videos Into Viral Shorts Automatically
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Upload podcasts, YouTube videos, webinars, and coaching content.
              ClipGenius AI automatically finds engaging moments, adds captions,
              and exports vertical short-form content in minutes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                Start Free
              </button>

              <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-white/40">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/50">
              <div>✓ No editing skills required</div>
              <div>✓ Beginner friendly</div>
              <div>✓ Optimized for Reels & Shorts</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-purple-500/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <div className="text-lg font-semibold">
                      1-Hour Podcast.mp4
                    </div>
                    <div className="mt-1 text-sm text-white/50">
                      AI Processing Complete
                    </div>
                  </div>

                  <div className="rounded-xl bg-green-500/15 px-4 py-2 text-sm text-green-400">
                    Ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/50">
                          Clip Generated
                        </div>
                        <div className="mt-2 text-xl font-semibold">
                          “This mistake kills your growth”
                        </div>
                      </div>

                      <div className="rounded-xl bg-purple-500/15 px-3 py-2 text-sm text-purple-300">
                        00:42
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/50">
                          Export Format
                        </div>
                        <div className="mt-2 text-xl font-semibold">
                          1080p Vertical
                        </div>
                      </div>

                      <div className="rounded-xl bg-blue-500/15 px-3 py-2 text-sm text-blue-300">
                        9:16
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-white/50">
                          AI Captions
                        </div>
                        <div className="mt-2 text-xl font-semibold">
                          Animated + Emoji Style
                        </div>
                      </div>

                      <div className="rounded-xl bg-pink-500/15 px-3 py-2 text-sm text-pink-300">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Features
          </div>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Built For Modern Short-Form Creators
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-purple-500/30"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-purple-500/15" />

              <h3 className="text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Pricing
          </div>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Simple Pricing For Creators
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-8 backdrop-blur-xl ${
                index === 1
                  ? 'border-purple-500/40 bg-purple-500/10'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="text-xl font-bold">{plan.name}</div>

              <div className="mt-6 text-6xl font-black">
                {plan.price}
                <span className="text-lg text-white/40">/mo</span>
              </div>

              <div className="mt-8 space-y-4 text-white/70">
                {plan.features.map((item) => (
                  <div key={item}>✓ {item}</div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-14 backdrop-blur-2xl">
          <h2 className="text-4xl font-black md:text-6xl">
            Turn One Video Into Weeks Of Content
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Repurpose podcasts, webinars, YouTube videos, and coaching content
            into vertical Shorts automatically.
          </p>

          <button className="mt-10 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-105">
            Start Creating
          </button>
        </div>
      </section>
    </main>
  )
      }
