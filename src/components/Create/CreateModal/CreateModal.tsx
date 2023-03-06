import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

export default function CreateModal() {
  const { isConnected, isSignedIn, isCreateUIModalOpen } = useContext(AppContext);

  const handleComponent = () => {
    if (isConnected && isSignedIn && isCreateUIModalOpen) {
      return <CreateUI />
    } else {
      return <CreateSignInJWT />
    }
  }

  return handleComponent()
}
