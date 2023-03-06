import { useState, useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ANTD
import { Row, Button } from 'antd'

// FETCH
import axios from 'axios'
// import { eden } from '@/util/eden';

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
    border-radius: 20px;
  }
  .auth-btn.sign-in {
    background-color: #7d7de4;
    margin-right: 5px;
  }
  .auth-btn.cancel {
    margin-left: 5px;
  }
`

const EthereumAuth = ({ onModalCancel }) => {
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const [ethAuthenticating, setEthAuthenticating] = useState(false)
  const [ethMessage, setEthMessage] = useState<string | null>(null)

  const { setIsSignedIn, setIsSignInModalOpen, setIsCreateUIModalOpen } =
    useContext(AppContext)

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      try {
        console.info('/api/login !')
        console.info({
          message: variables.message,
          signature: data,
          userAddress: address,
        })
        const resp = await axios.post('/api/login', {
          message: variables.message,
          signature: data,
          userAddress: address,
        })
        console.info(resp.data)
        const { token } = resp.data
        if (token) {
          console.info('got token', token)
          setIsSignedIn(true)
          setIsSignInModalOpen(false)
          setIsCreateUIModalOpen(true)
          setEthMessage(`Successfully authenticated as ${address}`)
        }
      } catch (error: any) {
        console.info('error!', error)
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
      console.info('sign message 1')
      await signMessage({
        message: preparedMessage,
      })
      console.info('sign message 2')
    } catch (error: any) {
      setEthMessage('Error authenticating')
      setEthAuthenticating(false)
    }
  }

  return (
    <EthereumAuthStyles>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          className="auth-btn sign-in"
          onClick={handleSiwe}
          // disabled={ethAuthenticating}
          // loading={ethAuthenticating}
        >
          Sign In
        </Button>
        <Button
          className={
            ethAuthenticating
              ? 'auth-btn authenticating cancel'
              : 'auth-btn cancel'
          }
          onClick={handleCancelModal}
          // disabled={ethAuthenticating}
        >
          Cancel
        </Button>
      </Row>
      {ethMessage && <p>{ethMessage}</p>}
    </EthereumAuthStyles>
  )
}

export default EthereumAuth
