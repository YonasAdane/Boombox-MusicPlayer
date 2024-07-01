import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {SpotifyApi, spotifyApiReducer } from './Services/spotifyAPI'

export const store = configureStore({
  reducer: {
    [SpotifyApi.reducerPath]: spotifyApiReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(SpotifyApi.middleware),
})

setupListeners(store.dispatch)
