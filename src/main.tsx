import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import LocationPage from './LocationPage.tsx'
import { LanguageProvider } from './LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/manuel-becerra" element={<LocationPage slug="manuel-becerra" />} />
          <Route path="/salamanca" element={<LocationPage slug="salamanca" />} />
          <Route path="/diego-de-leon" element={<LocationPage slug="diego-de-leon" />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
