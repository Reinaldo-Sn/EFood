import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/main'
import Perfil from './pages/Perfil/main'

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/perfil/:id' element={<Perfil />} />
  </Routes>
)

export default Rotas
