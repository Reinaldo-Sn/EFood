import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../../store'
import { changeStep, close } from '../../store/reducers/cart'
import Confirmation from './Confirmation/main'
import Delivery from './Delivery/main'
import Payment from './Payment/main'
import { CheckoutOverlay, CheckoutSection } from './style'

const Checkout = () => {
  const { step } = useSelector((state: RootState) => state.checkout)
  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(close())
    dispatch(changeStep('cart'))
  }

  return (
    <>
      <CheckoutOverlay onClick={closeCheckout} />
      <CheckoutSection>
        {step === 'delivery' && <Delivery />}
        {step === 'payment' && <Payment />}
        {step === 'confirmation' && <Confirmation />}
      </CheckoutSection>
    </>
  )
}

export default Checkout
