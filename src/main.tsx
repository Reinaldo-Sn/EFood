import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalCss } from './styles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalCss />
    <App />
  </StrictMode>,
)
