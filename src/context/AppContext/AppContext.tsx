/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react'
import { AppContextType } from '@/interfaces/AppContext'

const AppContext = createContext<AppContextType>({
  isConnected: true,
  setIsConnected: () => {},
  isSignedIn: false,
  setIsSignedIn: () => {},

  userId: null,
  setUserId: () => {},
  username: null,
  setUsername: () => {},
  userAddress: null,
  setUserAddress: () => {},

  lastLoadTime: null,
  setLastLoadTime: () => {},

  isCreateUIModalOpen: false,
  setIsCreateUIModalOpen: () => {},
  isCreationModalOpen: false,
  setIsCreationModalOpen: () => {},
  isSignInModalOpen: false,
  setIsSignInModalOpen: () => {},

  isLightTheme: false,
  setIsLightTheme: () => {},

  generators: {},
  setGenerators: () => {},
})

export default AppContext
