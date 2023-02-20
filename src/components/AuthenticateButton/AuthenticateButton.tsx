import { useEffect, useContext } from 'react'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

export default function AuthenticateButton({ onModalCancel }) {
  const context = useContext(AppContext)
  const { isWeb3AuthSuccess, isSignInModalVisible, isCreateUIModalVisible } =
    context

  console.log('Authenticate Button', {
    isWeb3AuthSuccess,
    isCreateUIModalVisible,
  })

  return isWeb3AuthSuccess ? (
    <CreateUI isOpen={isCreateUIModalVisible} />
  ) : (
    <CreateSignInJWT
      isOpen={isSignInModalVisible}
      onModalCancel={onModalCancel}
    />
  )
}
