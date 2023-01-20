import * as React from 'react'

// COMPONENTS
import { Button, Box, Typography } from '@mui/material'

// WEB3 HOOKS
import { useConnect } from 'wagmi'

// HOOKS
import { useIsMounted } from '@/hooks/useIsMounted'

export default function WalletSelector() {
  const isMounted = useIsMounted()
  const { connectors, isLoading, connect, error, pendingConnector } =
    useConnect()

  return (
    <Box>
      {connectors
        .filter(x => isMounted && x.ready)
        .map(x => (
          <Button
            variant="outlined"
            loading={isLoading && x.id === pendingConnector?.id}
            disabled={isMounted ? !x.ready : false}
            key={x.id}
            onClick={() => connect({ connector: x })}
          >
            {x.name}
          </Button>
        ))}

      {error && <Typography color="red">{error.message}</Typography>}
    </Box>
  )
}
