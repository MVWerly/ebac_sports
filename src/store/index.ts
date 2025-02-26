import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import favoriteReducer from './reducers/favorite'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
