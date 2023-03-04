import { createContext } from 'react'
import { AppContextType } from '@/interfaces/AppContext'

const AppContext = createContext<AppContextType>({
  isConnected: true,
  setIsConnected: () => {},
  isSignedIn: false,
  setIsSignedIn: () => {},

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
});

export default AppContext;
