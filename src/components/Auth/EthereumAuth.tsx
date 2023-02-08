'use client'

import { useState, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// ANTD
import { Button, Row, Typography } from 'antd'
const { Text } = Typography

// FETCH
import axios from 'axios'

// WEB3 & WALLET
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

// STYLES
import styled from 'styled-components'

const EthereumAuthStyles = styled.section`
  .auth-btn {
    margin: 5;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`

const EthereumAuth = ({ onModalCancel }) => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const [ethAuthenticating, setEthAuthenticating] = useState(false)
  const [ethMessage, setEthMessage] = useState<string | null>(null)

  const context = useContext(AppContext)

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      try {
        await axios.post('/api/login', {
          message: variables.message,
          signature: data,
          userAddress: address,
        })
        setEthMessage('Successfully authenticated as ' + address)
        context.setIsWeb3AuthSuccess(true)
      } catch (error: any) {
        setEthMessage('Error authenticating')
      }
      setEthAuthenticating(false)
    },
  })

  const handleCancelModal = () => {
    onModalCancel()
  }

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
    <EthereumAuthStyles>
      <h1>Sign in with Ethereum</h1>

      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          className="auth-btn sign-in"
          type="primary"
          onClick={handleSiwe}
          shape="round"
          size="large"
          disabled={ethAuthenticating}
          loading={ethAuthenticating}
          style={{ marginRight: 5 }}
        >
          <Text strong style={{ fontSize: '1rem', color: 'white' }}>
            Sign In
          </Text>
        </Button>
        <Button
          className="auth-btn cancel"
          type="default"
          onClick={handleCancelModal}
          shape="round"
          size="large"
          disabled={ethAuthenticating}
          style={{ marginLeft: 5 }}
        >
          <Text strong style={{ fontSize: '1rem' }}>
            Cancel
          </Text>
        </Button>
      </Row>
      {ethMessage && <p>{ethMessage}</p>}
    </EthereumAuthStyles>
  )
}

export default EthereumAuth
