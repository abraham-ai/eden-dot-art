'use client'

import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// WALLET
import { useAccount } from 'wagmi'


// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'

export default function CreateModal() {
  // const { isConnected } = useAccount()
  const context = useContext(AppContext)
  const { isWeb3WalletConnected, isModalVisible } = context

  const handleComponent = () => {
    isWeb3WalletConnected 
    ? <CreateUI isOpen={isModalVisible} />
    : <CreateSignInJWT isOpen={isModalVisible} />
  }

  return handleComponent()
}
