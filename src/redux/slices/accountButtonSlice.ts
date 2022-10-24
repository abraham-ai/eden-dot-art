import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisible: false,
}

export const accountButtonSlice = createSlice({
  name: 'accountButton',
  initialState,
  reducers: {
    setIsVisible: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isVisible = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsVisible } = accountButtonSlice.actions

export default accountButtonSlice.reducer
