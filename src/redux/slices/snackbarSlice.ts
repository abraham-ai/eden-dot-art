import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: true,
  value: '',
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbarVisible: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.visible = action.payload
    },
    setSnackbarMessage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSnackbarVisible, setSnackbarMessage } = snackbarSlice.actions

export default snackbarSlice.reducer
