import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  filterAddress: '',
  allTokens: [],
}

export const allTokensSlice = createSlice({
  name: 'allTokens',
  initialState,
  reducers: {
    setLoadingAllTokens: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loading = action.payload
    },
    setFilterAddress: (state, action) => {
      state.filterAddress = action.payload
    },
    allTokens: (state, action) => {
      state.allTokens = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoadingAllTokens, setFilterAddress } = allTokensSlice.actions

export default allTokensSlice.reducer
