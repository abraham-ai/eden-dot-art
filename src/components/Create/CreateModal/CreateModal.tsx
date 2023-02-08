'use client'

import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

export default function CreateModal() {
  const context = useContext(AppContext)
  const { isWeb3WalletConnected, isModalVisible, isWeb3AuthSuccess } = context

  console.log({ isModalVisible })
  console.log({ isWeb3WalletConnected, isWeb3AuthSuccess })

  const handleComponent = () => {
    return isWeb3WalletConnected && isWeb3AuthSuccess ? (
      <CreateUI />
    ) : (
      <CreateSignInJWT />
    )
  }

  return handleComponent()
}
