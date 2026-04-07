import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Footer from './components/Footer/main'
import Cart from './components/cart/main'

function App() {
  return (
    <BrowserRouter>
      <Cart />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
