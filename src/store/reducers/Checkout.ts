import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type DeliveryData = {
  receiver: string
  address: string
  city: string
  cep: string
  number: string
  complement: string
}

type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  cardMonth: string
  cardYear: string
}

type CheckoutState = {
  step: 'cart' | 'delivery' | 'payment' | 'confirmation'
  delivery: DeliveryData | null
  payment: PaymentData | null
  orderId: string | null
}

const CheckoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    step: 'cart',
    delivery: null,
    payment: null,
    orderId: null,
  } as CheckoutState,
  reducers: {
    goToDelivery: (state) => { state.step = 'delivery' },
    goToPayment: (state, action: PayloadAction<DeliveryData>) => {
      state.step = 'payment'
      state.delivery = action.payload
    },
    goToConfirmation: (state, action: PayloadAction<PaymentData>) => {
      state.step = 'confirmation'
      state.payment = action.payload
    },
    backToCart: (state) => { state.step = 'cart' },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload
    },
    resetCheckout: (state) => {
      state.step = 'cart'
      state.delivery = null
      state.payment = null
      state.orderId = null
    },
  }
})

export const { goToDelivery, goToPayment, goToConfirmation, backToCart, setOrderId, resetCheckout } = CheckoutSlice.actions

export default CheckoutSlice.reducer
