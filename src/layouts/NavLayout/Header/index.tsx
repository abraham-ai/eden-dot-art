import { useEffect } from 'react'

// ROUTER
// import Link from 'next/link'

// REDUX
import { setModalVisible } from '@/redux/slices/modalSlice'
import { setIsWeb3WalletConnected } from '@/redux/slices/authSlice'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'

// LIBS
import Blockies from 'react-blockies'

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
  padding: 0 20px;
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

// @media (min-width: ${theme.breakpoints.values.lg}px) {
//   // left: ${theme.sidebar.width};
//   left: 0;
//   width: auto;
// }
// background-color: ${alpha(theme.header.background, 0.95)};
// height: ${theme.header.height};
// color: ${theme.header.textColor};
// padding: ${theme.spacing(0, 2)};

export default function Header() {
  // WAGMI HOOKS
  const { isConnected } = useAccount()

  // retrieve current state of redux store
  const dispatch = useAppDispatch()
  // const { isModalVisible } = useAppSelector(state => state.modal)
  const { isWeb3WalletConnected } = useAppSelector(state => state.auth)

  // const handleCreateOpen = () => {
  //   // console.log('HANDLE-CREATE OPEN!')
  //   dispatch(setModalVisible(true))
  // }

  useEffect(() => {
    dispatch(setIsWeb3WalletConnected(isConnected))
  }, [isConnected, dispatch])

  // const handleAccountNav = useCallback(() => {
  //   if (!isWeb3WalletConnected) {
  //     return <ConnectButton />
  //   } else if (isWeb3WalletConnected && !isWeb3AuthSuccess) {
  //     return (
  //       <>
  //         <CreateSignInJWT isOpen={isOpen} onClose={onClose} />
  //         <ConnectButton />
  //       </>
  //     )
  //   } else if (isWeb3WalletConnected && isWeb3AuthSuccess) {
  //     return <ConnectButton />
  //   }
  // }, [isWeb3WalletConnected, isWeb3AuthSuccess])

  return (
    <HeaderStyles id="header-wrapper">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider avatar={CustomAvatar} chains={chains}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
              height: 60,
            }}
          >
            {/* <LoginButton /> */}
            <AppLogo logo="eden" size="small" />
            {/* {handleAccountNav()} */}

            <div className="nav-right-wrapper" style={{ display: 'flex' }}>
              {/* 
                <ThemeToggle />
                <SignInJWT />
                <ConnectButton /> 
              */}

              <ConnectButtonCustom />

              {isWeb3WalletConnected ? <CreateButton /> : null}
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </HeaderStyles>
  )
}
