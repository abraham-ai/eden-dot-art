export interface AppContext {
  authToken: string
  setAuthToken: (authToken: string) => void
  userId: string
  setUserId: (userId: string) => void
  isWeb3AuthSuccess: boolean
  setIsWeb3AuthSuccess: (isWeb3AuthSuccess: boolean) => void
  isCreateUIModalOpen: boolean
  setIsCreateUIModalOpen: (isCreateUIModalOpen: boolean) => void
  isCreationModalOpen: boolean
  setIsCreationModalOpen: (isCreationModalOpen: boolean) => void
  isSignInModalOpen: boolean
  setIsSignInModalOpen: (isSignInModalOpen: boolean) => void
  isWeb3WalletConnected: boolean
  setIsWeb3WalletConnected: (isWeb3WalletConnected: boolean) => void
  isLightTheme: boolean
  setIsLightTheme: (isLightTheme: boolean) => void
}
