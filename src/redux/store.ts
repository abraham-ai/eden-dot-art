import { configureStore } from '@reduxjs/toolkit'

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

export const store = configureStore({
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
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
