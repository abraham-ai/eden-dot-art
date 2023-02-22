'use client'

import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

export default function CreateModal() {
  const context = useContext(AppContext)
  const { isWeb3WalletConnected, isWeb3AuthSuccess, isCreateUIModalOpen } =
    context

  const handleComponent = () => {
    if (isWeb3WalletConnected && isWeb3AuthSuccess && isCreateUIModalOpen) {
      return <CreateUI />
    } else {
      return <CreateSignInJWT />
    }
  }

  return handleComponent()
}
