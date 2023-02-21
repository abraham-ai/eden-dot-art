export interface AppContext {
  authToken: string
  setAuthToken: (authToken: string) => void
  userId: string
  setUserId: (userId: string) => void
  isWeb3AuthSuccess: boolean
  setIsWeb3AuthSuccess: (isWeb3AuthSuccess: boolean) => void
  isCreateUIModalVisible: boolean
  setIsCreateUIModalVisible: (isCreateUIModalVisible: boolean) => void
  isCreationModalVisible: boolean
  setIsCreationModalVisible: (isCreationModalVisible: boolean) => void
  isSignInModalVisible: boolean
  setIsSignInModalVisible: (isSignInModalVisible: boolean) => void
  isWeb3WalletConnected: boolean
  setIsWeb3WalletConnected: (isWeb3WalletConnected: boolean) => void
  isLightTheme: boolean
  setIsLightTheme: (isLightTheme: boolean) => void
}
