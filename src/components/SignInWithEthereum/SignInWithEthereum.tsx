import * as React from 'react'

// MUI
import { Box, Button, Skeleton, Container } from '@mui/material'

// WEB3 HOOKS
import { chain, useAccount, useNetwork } from 'wagmi'

// UTILS
import { formatAddress } from '@/util/address'

// COMPONENTS
import Account from '@/components/Account/Account'
import SiweButton from '@/components/SiweButton/SiweButton'
import WalletSelector from '@/components/WalletSelector/WalletSelector'

export default function SignInWithEthereum() {
  const [address, setAddress] = React.useState<string>()
  const accountData = useAccount()
  const { chain: activeChain } = useNetwork()

  React.useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch('/api/me')
        const json = await res.json()
        setAddress(json.address)
      } catch (error) {
        // console.log({ error })
      }
    }
    handler()

    window.addEventListener('focus', handler)
    return () => window.removeEventListener('focus', handler)
  }, [])

  const signedInContent = address ? (
    <Container>
      <Box fontSize="large">Signed in as {formatAddress(address)}</Box>
      <Button
        size="small"
        variant="outlined"
        onClick={async () => {
          await fetch('/api/logout')
          setAddress(undefined)
        }}
      >
        Sign Out
      </Button>
    </Container>
  ) : null

  if (accountData.isConnected)
    return (
      <Container>
        <Box>
          <Account />

          {address ? (
            signedInContent
          ) : (
            <Skeleton>
              <SiweButton
                address={accountData.address as string}
                chainId={activeChain?.id ?? chain.mainnet.id}
                onSuccess={({ address }) => setAddress(address)}
              />
            </Skeleton>
          )}
        </Box>
      </Container>
    )

  return (
    <Container>
      <Box>
        <WalletSelector />
        {signedInContent}
      </Box>
    </Container>
  )
}
