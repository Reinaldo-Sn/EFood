import { Imagem } from './styles'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="Logo E-Food" />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </Imagem>
)

export default Hero
