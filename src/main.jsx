import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import HomePage from './app/HomePage.jsx'
import MoodPage from './app/MoodPage.jsx'
import PlayerPage from './app/PlayerPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/mood' element={<MoodPage />} />
        <Route path='/player' element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
