import { createContext } from 'react'

// TYPES
import { AuthMode } from '../models/types'

type AuthContextType = {
  selectedAuthMode: AuthMode | undefined
  setSelectedAuthMode: (authMode: AuthMode) => void
  availableAuthModes: Record<AuthMode, boolean>
  setAvailableAuthModes: (authModes: Record<AuthMode, boolean>) => void
}

export const AuthContext = createContext<AuthContextType>({
  selectedAuthMode: undefined,
  setSelectedAuthMode: () => {
    return null
  },
  availableAuthModes: {
    ethereum: false,
    apiKey: false,
  },
  setAvailableAuthModes: () => {
    return null
  },
})
