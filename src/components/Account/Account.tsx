import * as React from 'react'

// ANTD
import { Button, Skeleton, Avatar } from 'antd'

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
    // addressOrName: address,
    chainId: 1,
  })
  const { disconnect } = useDisconnect()

  if (!address || !isMounted) return null

  const formattedAddress = formatAddress(address)

  return (
    <section>
      <div>
        <Avatar src={ensAvatarData} alt="ENS Avatar">
          {!ensAvatarData}
        </Avatar>
        <article>
          <div style={{ fontSize: '2rem', textAlign: 'center' }}>
            {ensNameData
              ? `${ensNameData} (${formattedAddress})`
              : formattedAddress}
          </div>
          <div
            style={{ fontSize: '2rem', textAlign: 'center', gap: 1, display: 'flex' }}
          >
            Connected to {' '}
            <Skeleton animation={!(isMounted && connector) ? 'wave' : false}>
              {isMounted && connector ? connector.name : 'Wallet Name'}
            </Skeleton>
          </div>
        </article>
      </div>

      <Button onClick={() => disconnect()}>
        Disconnect
      </Button>
    </section>
  )
}
