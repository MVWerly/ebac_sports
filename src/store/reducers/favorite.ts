import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoriteState = {
  itens: Produto[]
}

const initialState: FavoriteState = {
  itens: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteProduct: (state, action: PayloadAction<Produto>) => {
      const favoriteProduct = action.payload

      if (state.itens.find((p) => p.id === favoriteProduct.id)) {
        state.itens = state.itens.filter((p) => p.id !== favoriteProduct.id)
      } else {
        state.itens.push(favoriteProduct)
      }
    }
  }
})

export const { addFavoriteProduct } = favoriteSlice.actions
export default favoriteSlice.reducer
