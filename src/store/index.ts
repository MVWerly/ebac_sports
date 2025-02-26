import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import favoriteReducer from './reducers/favorite'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
