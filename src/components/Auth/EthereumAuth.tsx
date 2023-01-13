import React, { useContext, useState } from 'react'

// MUI
import { Alert, Box, Button, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'

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
      setEthMessage('Error authenticating')
      setEthAuthenticating(false)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 2,
          color: 'rgb(0 80 30)',
          // color: 'gray',
        }}
      >
        Sign-in with Ethereum
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Button
          variant={'outlined'}
          color="primary"
          onClick={handleSiwe}
          sx={{ mr: 2, fontWeight: 'bold' }}
        >
          CANCEL
        </Button>
        <LoadingButton
          variant={'contained'}
          color="primary"
          onClick={handleSiwe}
          disabled={ethAuthenticating}
          loading={ethAuthenticating}
          sx={{ fontWeight: 'bold' }}
        >
          SIGN-IN
        </LoadingButton>
      </Box>

      {ethMessage && (
        <Alert
          severity="error"
          sx={{ mt: 2, background: '#FFCCCB', color: 'red', width: '100%' }}
        >
          {ethMessage}
        </Alert>
      )}
    </Box>
  )
}

export default EthereumAuth
