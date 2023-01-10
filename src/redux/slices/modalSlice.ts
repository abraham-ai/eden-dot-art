import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalVisible: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isModalVisible = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setModalVisible } = modalSlice.actions

export default modalSlice.reducer
