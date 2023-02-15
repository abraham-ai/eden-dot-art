import { useEffect, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// COMPONENTS
import Logo from '@/components/Logo/Logo'
import CreateModal from '@/components/Create/CreateModal/CreateModal'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import ConnectButtonCustom from '@/components/ConnectButtonCustom/ConnectButtonCustom'

// CONTRACT - WEB3
import {
  useAccount,
  chain,
  createClient,
  configureChains,
  WagmiConfig,
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'

// WALLET - WEB3
import {
  RainbowKitProvider,
  AvatarComponent,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'

// LIBS
import Blockies from 'react-blockies'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.goerli, chain.polygonMumbai],
  [publicProvider()],
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

// STYLES
import { HeaderWrapperStyles } from './HeaderWrapper.styled.js'

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
          <div className="header-wrapper-inner">
            <Logo />

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ConnectButtonCustom />

              {isWeb3WalletConnected ? (
                <>
                  <CreateButton />
                  <CreateModal />
                </>
              ) : null}
            </div>
          </div>
        </HeaderWrapperStyles>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
