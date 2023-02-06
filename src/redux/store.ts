import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

// SLICES
import {
  accountButtonReducer,
  allTokensReducer,
  counterReducer,
  filterReducer,
  sortReducer,
  creationsReducer,
  addressReducer,
  authReducer,
  tokenReducer,
  snackbarReducer,
  modalReducer,
} from './slices/'

const makeStore = () => 
  configureStore({
    reducer: {
      accountButton: accountButtonReducer,
      counter: counterReducer,
      allTokens: allTokensReducer,
      filter: filterReducer,
      sort: sortReducer,
      creations: creationsReducer,
      address: addressReducer,
      auth: authReducer,
      token: tokenReducer,
      snackbar: snackbarReducer,
      modal: modalReducer,
    },
    devTools: true
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper(makeStore)
