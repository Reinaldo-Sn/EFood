import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import { GlobalCss } from './styles'
import Footer from './components/Footer/main'

function App() {
  return (
  <BrowserRouter>
    <GlobalCss />
      <Rotas />
      <Footer />
  </BrowserRouter>
  )
}

export default App
