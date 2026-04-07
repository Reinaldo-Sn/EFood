import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../store'
import * as S from './style'

import Button from '../Button/main'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils/format'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getAllPrice = () => {
    return items.reduce((accumulator, item) => {
      return (accumulator += item.preco)
    }, 0)
  }

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.CartItems>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <img
                src={lixeira}
                alt="clique aqui para remover o prato"
                onClick={() => removeItem(item.id)}
              />
            </S.CartItem>
          ))}
        </S.CartItems>
        <S.SaleSection>
          <div>
            <h4>Valor total</h4>
            <p>{formataPreco(getAllPrice())}</p>
          </div>
          <Button
            type={'link'}
            variant={'primary'}
            title={'clique aqui para continuar com a entrega'}
          >
            Continuar com a entrega
          </Button>
        </S.SaleSection>
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Cart
