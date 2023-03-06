import { useContext } from 'react'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

export default function AuthenticateButton() {
  const { isConnected } = useContext(AppContext)

  return isConnected ? <CreateUI /> : <CreateSignInJWT />
}
