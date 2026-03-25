import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/main'
import Perfil from './pages/Perfil/main'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return <RouterProvider router={rotas} />
}

export default App
