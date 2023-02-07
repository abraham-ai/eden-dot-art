import { useState, useEffect, useContext } from 'react'
// useContext,

// ROUTER
// import Link from 'next/link'
// import { ROUTES } from '@/const/routes'
// import { useRouter } from 'next/router'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext';

// ANTD
import { Button, Modal, Typography } from 'antd' // theme,
const { Text } = Typography

// CSS
import styled from 'styled-components'

// COMPONENTS
import Logo from '@/components/Logo/Logo'
import CreateModal from '@/components/Create/CreateModal/CreateModal'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
import ConnectButtonCustom from '@/components/ConnectButtonCustom/ConnectButtonCustom'
// import SortCreationsBar from '@/components/SortCreationsBar'

// CONTRACT - WEB3
import {
  useAccount,
  chain,
  createClient,
  // useProvider,
  configureChains,
  WagmiConfig,
} from 'wagmi'

import { ConnectButton } from '@rainbow-me/rainbowkit'

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

// ICONS
// import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
// import { SidebarContext } from 'src/contexts/SidebarContext'
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
// import LoginIcon from '@mui/icons-material/Login'
// import ImportExportIcon from '@mui/icons-material/ImportExport'
// import FilterListIcon from '@mui/icons-material/FilterList'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import AddIcon from '@mui/icons-material/Add'
// import { FaDiscord } from 'react-icons/fa'

// height: ${theme.header.height};
// color: ${theme.header.textColor};
// padding: ${theme.spacing(0, 2)};

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

// @media (min-width: ${theme.breakpoints.values.lg}px) {
// left: ${theme.sidebar.width};

export default function Header() {

  // const context = useContext(AppContext)
  // const { isModalVisible } = context


  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)

  const { isConnected } = useAccount()

  // const { useToken } = theme;
  // const { token } = useToken;

  // const router = useRouter()
  // const [createOpen, setCreateOpen] = useState(false)

  const handleCreateClose = () => {
    console.log('HANDLE CREATE CLOSE!')
    context.setIsModalVisible(false)
  }

  const [loginOpen, setLoginOpen] = useState(false)
  // const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)

  // console.log({ createOpen })
  // console.log('ROUTER:', router.asPath)
  // if (router.asPath === '/watch') {
  //   console.log('TRUEEE /WATCH')
  // }

  // function getIsActive(route) {
  //   return router.asPath === route ? 'active' : ''
  // }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider avatar={CustomAvatar} chains={chains}>
        <HeaderWrapperStyles id="header-wrapper">
          <Logo />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* {CustomAvatar} */}

            <ConnectButtonCustom />

            {isConnected 
              ?     
                <>
                  <CreateButton />
                  <CreateModal
                    isOpen={true}
                    onModalCancel={handleCreateClose}
                  />
                </> 
              : null
            }

          </div>
        </HeaderWrapperStyles>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
