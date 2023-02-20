'use client'

import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

export default function CreateModal() {
  const context = useContext(AppContext)
  const { isWeb3WalletConnected, isWeb3AuthSuccess, isCreateUIModalVisible } =
    context

  console.log({ isCreateUIModalVisible })
  // console.log({ isWeb3WalletConnected, isWeb3AuthSuccess })

  const handleComponent = () => {
    if (isWeb3WalletConnected && isWeb3AuthSuccess && isCreateUIModalVisible) {
      return <CreateUI />
    } else {
      return <CreateSignInJWT />
    }
  }

  return handleComponent()
}
