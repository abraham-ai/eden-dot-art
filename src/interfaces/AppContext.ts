import { GeneratorState } from '@/interfaces/GeneratorState'

export interface AppContextType {
  isConnected: boolean
  setIsConnected: (isConnected: boolean) => void
  isSignedIn: boolean
  setIsSignedIn: (signedIn: boolean) => void

  userId: string
  setUserId: (userId: string) => void
  username: string
  setUsername: (username: string) => void
  userAddress: string
  setUserAddress: (userAddress: string) => void

  lastLoadTime: Date
  setLastLoadTime: (lastLoadTime: Date) => void

  isCreateUIModalOpen: boolean
  setIsCreateUIModalOpen: (isCreateUIModalOpen: boolean) => void
  isCreationModalOpen: boolean
  setIsCreationModalOpen: (isCreationModalOpen: boolean) => void
  isSignInModalOpen: boolean
  setIsSignInModalOpen: (isSignInModalOpen: boolean) => void

  isLightTheme: boolean
  setIsLightTheme: (isLightTheme: boolean) => void

  generators: Record<string, GeneratorState>
  setGenerators: (
    updater: (
      prevGenerators: Record<string, GeneratorState>,
    ) => Record<string, GeneratorState>,
  ) => void
}
