export default function DashboardPage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-zinc-900 p-6">
          <p className="text-zinc-400">Credits Remaining</p>
          <h2 className="mt-2 text-4xl font-bold">120</h2>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <p className="text-zinc-400">Projects</p>
          <h2 className="mt-2 text-4xl font-bold">8</h2>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <p className="text-zinc-400">Exports</p>
          <h2 className="mt-2 text-4xl font-bold">42</h2>
        </div>
      </div>
    </div>
  )
}
