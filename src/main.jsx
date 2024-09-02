import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{ App } from './App.jsx'
import './index.css'
// import { Profile } from './Components/Profile'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile /> */}
  </StrictMode>,
)
