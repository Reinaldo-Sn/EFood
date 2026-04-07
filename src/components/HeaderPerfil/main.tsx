import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import type { RootState } from '../../store'

import { HeaderInfo, Image, LinkHome } from './styles'
import logo from '../../assets/images/logo.png'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Image>
        <div className="container">
          <HeaderInfo>
            <LinkHome to="/">Restaurantes</LinkHome>
            <LinkHome to="/">
              <img src={logo} alt="Logo E-Food" />
            </LinkHome>
            <span onClick={openCart}>
              {items.length} produto(s) no carrinho
            </span>
          </HeaderInfo>
        </div>
      </Image>
    </>
  )
}

export default HeaderPerfil
