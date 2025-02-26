import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.find((p) => p.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
