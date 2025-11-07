import '../index.css'

function HomePage() {
  return (
    <>
      <div className="relative flex h-screen w-full flex-col justify-center bg-slate-900 bg-[url('/young-music2.png')] bg-cover bg-no-repeat">
        <div className='flex flex-col items-center justify-center gap-10 z-2'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-blue-400">SoundScape</h1>
            <h6 className="text-white italic">your mood, your groove</h6>
          </div>
          <div>
            <button>Find your Groove</button>
          </div>
        </div>
        <div className="absolute z-0 h-screen w-full bg-slate-900 opacity-70" />
      </div>
    </>
  )
}

export default HomePage
