import { useEffect, useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// COMPONENTS
import Logo from '@/components/Logo/Logo'
import CreateModal from '@/components/Create/CreateModal/CreateModal'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import ProfileButton from '@/components/Account/ProfileButton/ProfileButton'
import PendingCreations from '@/components/Create/CreateModal/PendingCreations'
import SettingsButton from '@/components/Account/SettingsButton/SettingsButton'

// CONTRACT - WEB3
import { useAccount, createClient, configureChains, WagmiConfig } from 'wagmi'

// CHAINS
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

// WALLET - WEB3
import {
  RainbowKitProvider,
  AvatarComponent,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'

// LIBS
import Blockies from 'react-blockies'

// STYLES
import { HeaderWrapperStyles } from './HeaderStyles'

const { chains, provider } = configureChains([mainnet], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'Eden Art App',
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
  const context = useContext(AppContext)
  const { setIsWeb3WalletConnected, isWeb3WalletConnected } = context

  const { isConnected } = useAccount()

  useEffect(() => {
    setIsWeb3WalletConnected(isConnected)
  }, [isConnected, setIsWeb3WalletConnected])

  // console.log({ isWeb3WalletConnected, isConnected, isWeb3AuthSuccess })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider avatar={CustomAvatar} chains={chains}>
        <HeaderWrapperStyles id="header-wrapper">
          <Logo />

          <div className="header-connect-wrapper">
            <ProfileButton />

            {isWeb3WalletConnected ? (
              <>
                <SettingsButton />
                <CreateButton />
                <CreateModal />
                <PendingCreations />
              </>
            ) : null}
          </div>
        </HeaderWrapperStyles>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
