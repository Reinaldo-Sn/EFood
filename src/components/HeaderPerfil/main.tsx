import logo from '../../assets/images/logo.png'
import { HeaderInfo, Image, LinkHome } from './styles'

const HeaderPerfil = () => (
  <>
    <Image>
      <div className="container">
        <HeaderInfo>
          <LinkHome to='/'>Restaurantes</LinkHome>
          <LinkHome to='/'>
            <img src={logo} alt="" />
          </LinkHome>
          <h2>0 produto(s) no carrinho</h2>
        </HeaderInfo>
      </div>
    </Image>
  </>
)

export default HeaderPerfil;
