import { useEffect, useContext } from 'react'

// LIBS
import Blockies from 'react-blockies'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// COMPONENTS
import SettingsButton from '@/components/Account/SettingsButton/SettingsButton'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import AppLogo from '@/components/AppLogo/AppLogo'

// WEB3
import { useAccount, createClient, configureChains, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import {
  RainbowKitProvider,
  AvatarComponent,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'

// STYLES
import { HeaderStyles } from './HeaderStyles'

const { provider, chains } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const CustomAvatar: AvatarComponent = ({ address }) => {
  return <Blockies seed={address} />
}

export default function Header() {
  const { isConnected: accountIsConnected } = useAccount()

  const context = useContext(AppContext)
  const { isConnected, isSignedIn, setIsSignedIn } = context

  useEffect(() => {
    setIsSignedIn(accountIsConnected)
  }, [setIsSignedIn, accountIsConnected, isSignedIn])

  return (
    <HeaderStyles id="header-wrapper">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider avatar={CustomAvatar} chains={chains}>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
              height: 60,
            }}
          >
            <AppLogo logo="eden" size="small" />

            <div className="nav-right-wrapper">
              <SettingsButton />
              {isConnected ? <CreateButton /> : null}
            </div>
          </section>
        </RainbowKitProvider>
      </WagmiConfig>
    </HeaderStyles>
  )
}
