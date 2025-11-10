import { useNavigate } from 'react-router-dom'

const MOODLIST = ['Happy', 'Sad']

export default function MoodPage() {
  const navigate = useNavigate()
  return (
    <div className="relative flex h-screen w-full flex-col justify-center">
      <div className="z-2 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-white italic">What mood are you in for?</h4>
        </div>
        <div>
          <div className="flex h-30 w-full justify-center">
            <ul className="flex items-center gap-5">
              {MOODLIST.map((mood) => {
                return <li>{mood}</li>
              })}
            </ul>
          </div>
          <button onClick={() => navigate('/player')}>Let's Play</button>
        </div>
      </div>
    </div>
  )
}
