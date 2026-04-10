import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  currentStep: 'cart' | 'checkout'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  currentStep: 'cart',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    changeStep: (state, action: PayloadAction<'cart' | 'checkout'>) => {
      state.currentStep = action.payload
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { add, remove, open, close, changeStep, clearCart } = cartSlice.actions

export default cartSlice.reducer
