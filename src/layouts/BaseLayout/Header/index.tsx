import { useEffect, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// COMPONENTS
import Logo from '@/components/Logo/Logo'
import CreateModal from '@/components/Create/CreateModal/CreateModal'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import ConnectButtonCustom from '@/components/ConnectButtonCustom/ConnectButtonCustom'

// CONTRACT - WEB3
import { useAccount, createClient, configureChains, WagmiConfig } from 'wagmi'

// CHAINS
import { goerli } from 'wagmi/chains'
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

const { chains, provider } = configureChains([goerli], [publicProvider()])

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
  const { setIsWeb3WalletConnected, isWeb3WalletConnected, isWeb3AuthSuccess } =
    context

  const { isConnected } = useAccount()

  useEffect(() => {
    setIsWeb3WalletConnected(isConnected)
  }, [isConnected])

  console.log({ isWeb3WalletConnected, isConnected, isWeb3AuthSuccess })

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider avatar={CustomAvatar} chains={chains}>
        <HeaderWrapperStyles id="header-wrapper">
          <Logo />

          <div className="header-connect-wrapper">
            <ConnectButtonCustom />

            {isWeb3WalletConnected ? (
              <>
                <CreateButton />
                <CreateModal />
              </>
            ) : null}
          </div>
        </HeaderWrapperStyles>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
