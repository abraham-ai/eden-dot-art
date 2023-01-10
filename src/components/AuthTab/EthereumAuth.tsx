import React, { useContext, useState } from 'react'

// UI
import { Button } from 'antd'

// CONTEXT
import { AuthContext } from '../../contexts/AuthContext'

// FETCH
import axios from 'axios'

// WEB3 & WALLET
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

const EthereumAuth = () => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const { setSelectedAuthMode, availableAuthModes, setAvailableAuthModes } =
    useContext(AuthContext)

  const [ethAuthenticating, setEthAuthenticating] = useState(false)
  const [ethMessage, setEthMessage] = useState<string | null>(null)

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      try {
        await axios.post('/api/auth/wallet', {
          message: variables.message,
          signature: data,
          userAddress: address,
        })
        setEthMessage('Successfully authenticated')
        setAvailableAuthModes({
          ...availableAuthModes,
          ethereum: true,
        })
        setSelectedAuthMode('ethereum')
      } catch (error: any) {
        setEthMessage('Error authenticating')
      }
      setEthAuthenticating(false)
    },
  })

  const handleSiwe = async () => {
    if (!isConnected) return
    setEthAuthenticating(true)
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce: Date.now().toString(),
      })
      const preparedMessage = message.prepareMessage()
      await signMessage({
        message: preparedMessage,
      })
    } catch (error: any) {
      setEthMessage('Error authenticating')
      setEthAuthenticating(false)
    }
  }

  return (
    <div>
      <h1>Sign in with Ethereum</h1>
      <Button
        type="primary"
        onClick={handleSiwe}
        disabled={ethAuthenticating}
        loading={ethAuthenticating}
      >
        Sign In
      </Button>
      {ethMessage && <p>{ethMessage}</p>}
    </div>
  )
}

export default EthereumAuth
