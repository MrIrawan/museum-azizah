import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './components/pages/RegisterPage'
import MuseumAzizah from './components/pages/Museum'
import MusicPlayer from './components/pages/MusicPlayer'
import NotePlayer from './components/pages/NotePlayer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />
  },
  {
    path: '/azizah',
    element: <MuseumAzizah></MuseumAzizah>
  },
  {
    path: '/music',
    element: <MusicPlayer></MusicPlayer>
  },
  {
    path: '/devnote',
    element: <NotePlayer audioSrc={"rekaman-developer.m4a"}></NotePlayer>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
