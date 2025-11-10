import ReactPlayer from 'react-player'

export default function PlayerPage() {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr]">
      <aside className="h-full border-r border-gray-700/30"></aside>
      <main className="flex flex-col bg-linear-90 from-slate-900 to-slate-800">
        <div className="aspect-video w-full p-10">
          <div className="h-full w-full overflow-hidden rounded-3xl shadow-2xl">
            <ReactPlayer
              src="https://youtu.be/Egx0AXIIChA?si=FHsQIhwUvp6l-vIb"
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
