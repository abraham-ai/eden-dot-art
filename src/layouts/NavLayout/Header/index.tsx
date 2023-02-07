import { useEffect, useContext } from 'react'

// ROUTER
// import Link from 'next/link'

// LIBS
import Blockies from 'react-blockies'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// COMPONENTS
// import CreateModal from '@/components/CreateModal'
// import LoginButton from '@/components/LoginButton'
// import CreateSignInJWT from '@/components/CreateSignInJWT'
// import SignInJWT from '@/components/SignInJWT/SigninJWT'
// import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import ConnectButtonCustom from '@/components/ConnectButtonCustom/ConnectButtonCustom'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import AppLogo from '@/components/AppLogo/AppLogo'

// WEB3
import { useAccount, createClient, configureChains, WagmiConfig } from 'wagmi' //  WagmiProvider, chain,
import { mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

// import { useProvider } from 'wagmi'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  RainbowKitProvider,
  AvatarComponent,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit'

// apiProvider,

// ANTD

// STYLES
import styled from 'styled-components'

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

const HeaderStyles = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  right: 0;
  left: 0;
  background: white;
  z-index: 100;
  box-shadow: 0px 1px 1px #0000001f;
  backdrop-filter: blur(3px);

  > div:first-child {
    width: 100%;
    height: 100%;
    // background: lime;
  }

  /*** NAV RIGHT WRAPPER ***/
  .nav-right-wrapper {
    display: flex;
    height: 100%;
    min-height: 100%;
    align-items: center;
    // background: magenta;
  }

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
  .menu-item {
    display: flex;
  }
`

export default function Header() {

  const { isConnected } = useAccount()

  const context = useContext(AppContext)
  const { setIsWeb3WalletConnected, isWeb3WalletConnected } = context

  useEffect(() => {
    setIsWeb3WalletConnected(isConnected)
  }, [isConnected])

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

            <div className="nav-right-wrapper" style={{ display: 'flex' }}>
              <ConnectButtonCustom />
              {isWeb3WalletConnected ? <CreateButton /> : null}
            </div>
          </section>
        </RainbowKitProvider>
      </WagmiConfig>
    </HeaderStyles>
  )
}
