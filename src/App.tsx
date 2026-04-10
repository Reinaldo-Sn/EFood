import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import type { RootState } from './store'
import Rotas from './routes'
import Cart from './components/Cart/main'
import Checkout from './components/Checkout/main'

function App() {
  const { currentStep } = useSelector((state: RootState) => state.cart)

  return (
    <BrowserRouter>
      {currentStep === 'cart' ? <Cart /> : <Checkout />}
      <Rotas />
    </BrowserRouter>
  )
}

export default App
