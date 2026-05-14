export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Turn Long Videos Into Viral Shorts Automatically
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          AI-powered shorts generation for faceless creators.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 text-black font-semibold">
            Start Free
          </button>

          <button className="rounded-xl border border-zinc-700 px-6 py-3">
            Watch Demo
          </button>
        </div>
      </section>
    </main>
  )
}
