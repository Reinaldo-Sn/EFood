import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../../store'
import { changeStep, close } from '../../../store/reducers/cart'
import { resetCheckout } from '../../../store/reducers/Checkout'
import Button from '../../Button/main'
import { FormContainer } from '../style'

const Confirmation = () => {
  const dispatch = useDispatch()
  const { orderId } = useSelector((state: RootState) => state.checkout)

  const handleConclude = () => {
    dispatch(resetCheckout())
    dispatch(changeStep('cart'))
    dispatch(close())
  }

  return (
    <FormContainer>
      <h3>Pedido realizado - {orderId ?? ''}</h3>
      <div>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </div>
      <Button
        title="clique aqui para concluir o pedido"
        type="button"
        variant={'primary'}
        onClick={handleConclude}
      >
        Concluir
      </Button>
    </FormContainer>
  )
}

export default Confirmation
