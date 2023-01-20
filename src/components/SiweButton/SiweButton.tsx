import React, { useState, useCallback, useEffect } from 'react'

// MUI
import { Box, Alert } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

// WEB3 HOOKS
import { SiweMessage } from 'siwe'
import { useSignMessage } from 'wagmi'

// ICONS
import { FaEthereum } from 'react-icons/fa'

type Props = {
  address: string
  chainId: number
  onSuccess?(data: { address: string }): void
}

export default function SiweButton({ address, chainId, onSuccess }: Props) {
  const { signMessageAsync } = useSignMessage()
  const [state, setState] = useState<{
    error?: Error
    loading?: boolean
    nonce?: string
  }>({})

  useEffect(() => {
    async function fetchNonce() {
      try {
        const nonceRes = await fetch('/api/nonce')
        const nonce = await nonceRes.text()
        setState(x => ({ ...x, nonce }))
      } catch (error) {
        setState(x => ({ ...x, error: error as Error }))
      }
    }

    fetchNonce()
  }, [])

  const handleSignIn = useCallback(async () => {
    try {
      setState(x => ({ ...x, error: undefined, loading: true }))
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce: state.nonce,
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
      })
      if (!verifyRes.ok) throw new Error('Error verifying message')

      setState(x => ({ ...x, loading: false }))
      onSuccess?.({ address })
    } catch (error) {
      setState(x => ({ ...x, error: error as Error, loading: false }))
    }
  }, [address, chainId, state.nonce, signMessageAsync, onSuccess])

  return (
    <Box>
      <LoadingButton
        disabled={!state.nonce || state.loading}
        loading={!state.nonce || state.loading}
        startIcon={!state.loading && <FaEthereum />}
        onClick={handleSignIn}
      >
        {state.loading ? 'Check Wallet' : 'Sign-In with Ethereum'}
      </LoadingButton>

      {state.error && <Alert severity="error">{state.error.message}</Alert>}
    </Box>
  )
}
