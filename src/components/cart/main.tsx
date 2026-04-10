import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../store'
import { changeStep, close, remove } from '../../store/reducers/cart'
import { goToDelivery } from '../../store/reducers/Checkout'
import { formataPreco } from '../../utils/format'
import lixeira from '../../assets/images/lixeira.png'
import Button from '../Button/main'
import Checkout from '../Checkout/main'
import * as S from './style'

const Cart = () => {
  const { isOpen, items, currentStep } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleDelivery = () => {
    dispatch(goToDelivery())
    dispatch(changeStep('checkout'))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getAllPrice = () =>
    items.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {currentStep === 'cart' ? (
          <>
            <S.CartItems>
              {items.length === 0 ? (
                <p>O carrinho está vazio, adicione um item para continuar</p>
              ) : (
                items.map((item) => (
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
                ))
              )}
            </S.CartItems>
            {items.length > 0 && (
              <S.SaleSection>
                <div>
                  <h4>Valor total</h4>
                  <p>{formataPreco(getAllPrice())}</p>
                </div>
                <Button
                  type={'button'}
                  variant={'primary'}
                  title={'clique aqui para continuar com a entrega'}
                  onClick={handleDelivery}
                >
                  Continuar com a entrega
                </Button>
              </S.SaleSection>
            )}
          </>
        ) : (
          <Checkout />
        )}
      </S.Sidebar>
    </S.CardContainer>
  )
}

export default Cart
