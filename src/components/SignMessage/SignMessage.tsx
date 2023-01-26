import * as React from 'react'

// MUI
import { Container, Box, Typography, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'

// UTILS
import { verifyMessage } from 'ethers/lib/utils'

// WALET
import { useAccount, useSignMessage } from 'wagmi'

// COMPONENTS
import Account from '@/components/Account/Account'
import WalletSelector from '@/components/WalletSelector/WalletSelector'

// ICONS
import SaveIcon from '@mui/icons-material/Save'

export default function SignMessage() {
  const recoveredAddress = React.useRef<string>()

  const { isConnected } = useAccount()
  const {
    data: signMessageData,
    error,
    isLoading,
    signMessage,
  } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
    },
  })

  // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
  //   message: 'gm wagmi frens',
  // })

  if (isConnected)
    return (
      <Box>
        <Account />
        <Box
          onSubmit={event => {
            event.preventDefault()
            const formData = new FormData(event.target as HTMLFormElement)
            const message = formData.get('message') as string
            signMessage({ message })
          }}
        >
          <TextField
            name="message"
            label="Enter a message to sign"
            variant="outlined"
            placeholder="The quick brown fox…"
            required
          />

          <LoadingButton
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            {isLoading ? 'Check Wallet' : 'Sign Message'}
          </LoadingButton>

          {signMessageData && (
            <Box color="TextSecondary">
              <Box>Recovered Address: {recoveredAddress.current}</Box>
              <Box>
                Signature:
                <div style={{ wordBreak: 'break-all' }}>{signMessageData}</div>
              </Box>
            </Box>
          )}

          {error && <Typography color="red">{error.message}</Typography>}
        </Box>
      </Box>
    )

  return (
    <Container>
      <WalletSelector />
    </Container>
  )
}
