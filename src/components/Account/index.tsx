import * as React from 'react'

// COMPONENTS
import { Container, Avatar, Box, Button, Skeleton } from '@mui/material'

// WEB3 HOOKS
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

// HOOKS
import { useIsMounted } from '@/hooks/useIsMounted'

// UTILS
import { formatAddress } from '@/util/address'

export default function Account() {
  const isMounted = useIsMounted()
  const { address, connector } = useAccount()
  const { data: ensNameData } = useEnsName({
    address,
    chainId: 1,
  })
  const { data: ensAvatarData } = useEnsAvatar({
    addressOrName: address,
    chainId: 1,
  })
  const { disconnect } = useDisconnect()

  if (!address || !isMounted) return null

  const formattedAddress = formatAddress(address)

  return (
    <Container>
      <Container>
        <Avatar src={ensAvatarData} alt="ENS Avatar">
          {!ensAvatarData}
        </Avatar>
        <Container>
          <Box fontSize="large" textAlign={{ xs: 'center', sm: 'left' }}>
            {ensNameData
              ? `${ensNameData} (${formattedAddress})`
              : formattedAddress}
          </Box>
          <Box
            fontSize="small"
            color="textSecondary"
            textAlign={{ xs: 'center', sm: 'left' }}
            display="flex"
            gap="1"
          >
            Connected to{' '}
            <Skeleton animation={!(isMounted && connector) ? 'wave' : false}>
              {isMounted && connector ? connector.name : 'Wallet Name'}
            </Skeleton>
          </Box>
        </Container>
      </Container>

      <Button variant="outlined" onClick={() => disconnect()}>
        Disconnect
      </Button>
    </Container>
  )
}
