import { useState, useEffect } from 'react'
// useContext,

// ROUTER
// import Link from 'next/link'
// import { ROUTES } from '@/const/routes'
// import { useRouter } from 'next/router'

// REDUX
import { setModalVisible } from '@/redux/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'

// MUI
import {
  alpha,
  Button,
  Box,
  Backdrop,
  lighten,
  Modal,
  styled,
  useTheme,
  // Typography,
} from '@mui/material'
// Fade

// useSignMessage

// COMPONENTS
import Logo from '@/components/Logo'
import CreateModal from '@/components/CreateModal/CreateModal'
import ConnectButtonCustom from '@/components/ConnectButtonCustom'
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
import AddIcon from '@mui/icons-material/Add'
import { FaDiscord } from 'react-icons/fa'

// REDUX
import { setIsWeb3WalletConnected } from '@/redux/slices/authSlice'

// VIEW ICONS

const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  backgroundColor: 'white',
  p: 4,
}

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: white;
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
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
          border-bottom: 3px solid black
        }
        .nav-link a {
          font-weight: 600;
          color: gray;
          margin: 20px;
          text-decoration: unset;
          padding-bottom: 3px;
        }
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            // left: ${theme.sidebar.width};
            left: 0;
            width: auto;
        }
        .menu-item {
          display: flex;
        }
`,
)

export default function Header() {
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)

  // retrieve current state of redux store
  const dispatch = useAppDispatch()
  const { isModalVisible } = useAppSelector(state => state.modal)
  const { isWeb3WalletConnected } = useAppSelector(state => state.auth)
  // isWeb3AuthSuccess, isWeb3AuthSigning,

  const {
    // address,
    isConnected,
  } = useAccount()
  const theme = useTheme()
  // const router = useRouter()

  // const [createOpen, setCreateOpen] = useState(false)

  const handleCreateOpen = () => {
    // console.log('HANDLE-CREATE OPEN!')
    dispatch(setModalVisible(true))
  }

  const handleCreateClose = () => {
    // console.log('HANDLE CREATE CLOSE!')
    dispatch(setModalVisible(false))
  }

  const [loginOpen, setLoginOpen] = useState(false)
  // const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)

  useEffect(() => {
    dispatch(setIsWeb3WalletConnected(isConnected))
  }, [isConnected, dispatch])

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
        <HeaderWrapper
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          id="header-wrapper"
          sx={{
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15,
                  )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 8px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.2,
                  )}, 0px 5px 22px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1,
                  )}`,
          }}
        >
          {/* <EdenNavTop /> */}

          {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack> */}

          {/* <Box display="flex" alignItems="center">
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' },
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box> */}

          {/* <Link href="/garden" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          DEV GARDEN
        </Typography>
      </Link>

      <Link href="/ideas" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          IDEAS
        </Typography>
      </Link>

      <Link href="/apps" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          APPS
        </Typography>
      </Link>
      
      <Link href="/faq" className="nav-link-wrapper">
      <Typography variant={'h4'} className="nav-link-text">
      FAQ
      </Typography>
    </Link> */}

          <Logo />

          {/* <Box sx={{ display: 'flex' }}>
        <Box className={`nav-link ${getIsActive('/browse')}`}>
          <Link href={ROUTES.EDEN_ART.BROWSE} style={{ marginLeft: 2 }}>
            BROWSE
          </Link>
        </Box>
        <Box className={`nav-link ${getIsActive('/watch')}`}>
          <Link href={ROUTES.EDEN_ART.WATCH} style={{ marginLeft: 2 }}>
            WATCH
          </Link>
        </Box>
      </Box> */}

          {/* <Link href="/about" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          ABOUT
        </Typography>
      </Link> */}

          {/* <Link href="/apps" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          APPS
        </Typography>
      </Link> */}

          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ pr: 10 }}>
          <Logo name={'Collage'} />
        </Box>
        <Link href="/about-collage" className="nav-link-wrapper">
          <Typography variant={'h4'} className="nav-link-text" sx={{ pr: 5 }}>
            ABOUT
          </Typography>
        </Link>

        <Link href="/apps" className="nav-link-wrapper">
          <Typography variant={'h4'} className="nav-link-text">
            APPS
          </Typography>
        </Link>
      </Box> */}

          {/* <SortCreationsBar /> */}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {isWeb3WalletConnected ? (
          <Button
            id="create-button"
            variant="outlined"
            onClick={handleCreateOpen}
            size="medium"
            startIcon={
              <FilterListIcon className="create-icon" fontSize={'large'} />
            }
            sx={{ mr: 1 }}
          >
            Filter
          </Button>
        ) : null} */}

            {/* {isWeb3WalletConnected ? (
          <Button
            id="create-button"
            variant="outlined"
            onClick={handleCreateOpen}
            size="medium"
            startIcon={
              <ImportExportIcon className="create-icon" fontSize={'large'} />
            }
            sx={{ mr: 1 }}
          >
            Sort
          </Button>
        ) : null} */}

            {/* {isWeb3WalletConnected ? (
          <Button
            id="mycreations-button"
            variant="outlined"
            onClick={() => null}
            size="medium"
            endIcon={
              <AccountCircleIcon className="account-icon" fontSize={'large'} />
            }
            sx={{ mr: 1 }}
          >
            My Creations
          </Button>
        ) : null} */}

            {CustomAvatar}

            <ConnectButtonCustom />

            {isWeb3WalletConnected ? (
              <Button
                id="create-button"
                variant="contained"
                onClick={handleCreateOpen}
                size="medium"
                endIcon={<AddIcon className="create-icon" fontSize={'large'} />}
                sx={{
                  ml: 1.5,
                  borderRadius: '30px',
                  padding: '10px 20px',
                  height: 45,
                }}
              >
                Create
              </Button>
            ) : null}

            {/* <Button
          id="login-button"
          variant="contained"
          onClick={handleLoginOpen}
          size="medium"
          endIcon={<LoginIcon className="signin-icon" fontSize={'large'} />}
          sx={{ mr: 1 }}
        >
          Sign-in
        </Button> */}

            <CreateModal
              isOpen={isModalVisible}
              onClose={() => handleCreateClose}
            />

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={loginOpen}
              onClose={handleLoginClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Box sx={BoxModalStyle}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <ConnectButton />
                  Or
                  <Button variant={'contained'}>
                    Connect Discord
                    <FaDiscord style={{ fontSize: '2rem', paddingLeft: 10 }} />
                  </Button>
                </Box>
              </Box>
            </Modal>
          </Box>

          {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createOpen}
        onClose={handleCreateClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={BoxModalStyle}>Create Modal tools, text input, etc here</Box>
      </Modal> */}
        </HeaderWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
