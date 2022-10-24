import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  creations: [],
  myCreations: [],
  singleCreation: [],
  pageUpdate: 'replace',
  page: 0,
  creationsProgress: 0,
  runningCreationCount: 0,
  isCreationRunning: false,
  isRunning: {},
  newCreationReady: '',
  isLoader: false,
}

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const creationsSlice = createSlice({
  name: 'creations',
  initialState,
  reducers: {
    addCreations: (state, action) => {
      state.creations = [...state.creations, ...action.payload]
    },
    replaceCreations: (state, action) => {
      // console.log(`%c REDUX REPLACE-CREATIONS`, 'background: #222; color: #bada55');
      // console.log(action.payload);

      state.creations = action.payload
      // console.log(state.creations);
      // console.log(state.creations.length);
      // state.creations = [...action.payload];
      if (state.creations.length === 16 && state.page === 0) {
        state.pageUpdate = 'add'
      }
      // state.page = 0;
    },
    setMyCreations: (state, action) => {
      state.myCreations = [...state.myCreations, ...action.payload]
    },
    setLatestCreation: (state, action) => {
      if (action.payload.type === 'unshift') {
        state.creations.unshift(action.payload.data)
      } else if (action.payload.type === 'replace') {
        state.creations[0] = action.payload.data
      }
    },
    setSingleCreation: (state, action) => {
      // console.log(action.payload)
      state.singleCreation = action.payload
    },
    setCreationsProgress: (state, action) => {
      // console.log('setCreationsProgress')
      // console.log(action.payload)
      state.creationsProgress = action.payload
    },
    setRunningCreationCount: (state, action) => {
      state.runningCreationCount = action.payload
    },
    incrementPageCreation: (state, action) => {
      // state.page += 1
      state.page = action.payload + 1
    },
    resetPageCreation: state => {
      state.page = 0
    },
    setPageUpdate: (state, action) => {
      state.pageUpdate = action.payload
    },
    incrementRunningCreationCount: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.runningCreationCount += 1
    },
    decrementRunningCreationCount: state => {
      state.runningCreationCount -= 1
    },
    setIsCreationRunningTrue: state => {
      state.isCreationRunning = true
    },
    setIsCreationRunningFalse: state => {
      state.isCreationRunning = false
    },
    setIsRunningTrue: (state, action) => {
      state.isRunning[action.payload] = true
    },
    setIsRunningFalse: (state, action) => {
      state.isRunning[action.payload] = false
    },
    setNewCreationReady: (state, action) => {
      state.newCreationReady = action.payload
    },
    setIsLoader: (state, action) => {
      state.isLoader = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  addCreations,
  replaceCreations,
  setMyCreations,
  setLatestCreation,
  setSingleCreation,
  setIsRunningFalse,
  setIsRunningTrue,
  setIsCreationRunningTrue,
  setIsCreationRunningFalse,
  setCreationsProgress,
  incrementPageCreation,
  resetPageCreation,
  setPageUpdate,
  incrementRunningCreationCount,
  decrementRunningCreationCount,
  setIsLoader,
} = creationsSlice.actions

export default creationsSlice.reducer
