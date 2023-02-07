import { useContext } from 'react'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

export default function AuthenticateButton({ onModalCancel }) {
  const context = useContext(AppContext)
  const { isWeb3AuthSuccess, isModalVisible } = context

  return isWeb3AuthSuccess ? (
    <CreateUI isOpen={isModalVisible} />
  ) : (
    <CreateSignInJWT isOpen={isModalVisible} onModalCancel={onModalCancel} />
  )
}
