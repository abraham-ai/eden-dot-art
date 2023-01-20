import React, { useState } from 'react'

// ANTD
import { Alert, Button } from 'antd'

// FETCH
import axios from 'axios'

// WEB3 & WALLET
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

// REDUX
import { batch } from 'react-redux'
import { setModalVisible } from '@/redux/slices/modalSlice'
import { setIsWeb3AuthSuccess } from '@/redux/slices/authSlice'
import { useAppDispatch } from '@/hooks/hooks'

const EthereumAuth = () => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()

  const [ethAuthenticating, setEthAuthenticating] = useState(false)
  const [ethAuthenticated, setEthAuthenticated] = useState(false)
  const [ethMessage, setEthMessage] = useState<string | null>(null)
    
  const dispatch = useAppDispatch() 

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      try {
        await axios.post('/api/auth/wallet', {
          message: variables.message,
          signature: data,
          userAddress: address,
        })
          setEthMessage('Successfully authenticated')
          setEthAuthenticated(true)

          batch(() => {
            dispatch(setModalVisible(false));
            dispatch(setIsWeb3AuthSuccess(true));
          })
      } catch (error: any) {
          setEthMessage('Error authenticating')
          setEthAuthenticated(false)
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
        statement: 'Sign-in with Ethereum to the app.',
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
      console.log(error)
      setEthMessage('Error authenticating')
        setEthAuthenticating(false)
        setEthAuthenticated(false)
    }
  }
    
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Button
          type='default'
          color='primary'
          onClick={() => dispatch(setModalVisible(false))}
          style={{ marginRight: 20, fontWeight: 'bold' }}
        >
          CANCEL
        </Button>
        <Button
          type='primary'
          color="primary"
          onClick={handleSiwe}
          disabled={ethAuthenticating}
          loading={ethAuthenticating}
          style={{ fontWeight: 'bold' }}
        >
          SIGN-IN
        </Button>
      </div>

    {ethMessage && (
        <Alert type={ethAuthenticated ? 'success' : 'error'}
               message={ethMessage}
               style={{ width: '100%', height: 50, marginTop: 10 }}>
          
        </Alert>
      )}
    </div>
  )
}

export default EthereumAuth
