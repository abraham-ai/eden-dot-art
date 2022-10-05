import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isWeb3WalletConnected: false,
  isWeb3AuthSuccess: false,
  isWeb3AuthSigning: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsWeb3WalletConnected: (state, action) => {
      state.isWeb3WalletConnected = action.payload
    },
    setIsWeb3AuthSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isWeb3AuthSuccess = action.payload
    },
    setIsWeb3AuthSigning: (state, action) => {
      state.isWeb3AuthSigning = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setIsWeb3WalletConnected,
  setIsWeb3AuthSigning,
  setIsWeb3AuthSuccess,
} = authSlice.actions

export default authSlice.reducer
