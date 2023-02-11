import { useEffect, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// CSS
import styled from 'styled-components'

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

const HeaderWrapperStyles = styled.div`
  position: fixed;
  width: 100%;
  right: 0;
  z-index: 6;
  background-color: white;
  justify-content: space-between;
  backdrop-filter: blur(3px);

  @media (max-width: 930px) {
    display: flex;
    padding: 0 10px;
  }
  /*** CREATE BUTTON ***/
  #create-button {
    display: flex;
    align-items: center;
    height: 45px;
    margin-left: 15px;
    padding: 10px 20px;
    color: white;
    background: #8c7cf0;
    border-radius: 30px;
  }
  /*** NAV LINK ***/
  .nav-link-wrapper {
    padding: 0 10px;
  }
  .nav-link-wrapper:hover {
    color: white;
  }
  .nav-link-text:hover {
    cursor: pointer;
    color: white;
  }
  .nav-link.active a {
    font-weight: 600;
    color: black;
    margin: 20px;
    text-decoration: unset;
    padding-bottom: 3px;
    border-bottom: 3px solid black;
  }
  .nav-link a {
    font-weight: 600;
    color: gray;
    margin: 20px;
    text-decoration: unset;
    padding-bottom: 3px;
  }
  @media (min-width: 1200px) {
    left: 0;
    width: auto;
    display: flex;
    padding: 0 20px;
  }
  /*** MENU ITEM ***/
  .menu-item {
    display: flex;
  }
`

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

          <div style={{ display: 'flex', alignItems: 'center' }}>
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
