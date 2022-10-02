import { useState, useEffect } from 'react'
// useContext,

// ROUTER
import Link from 'next/link'

// REDUX
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
  Typography,
} from '@mui/material'
// Fade

// WEB3 HOOKS
import { useAccount, useSignMessage } from 'wagmi'

// NAV
// import { EdenNavTop } from '../../../components';

// COMPONENTS
import Logo from '@/components/Logo'
import SortCreationsBar from '@/components/SortCreationsBar'
import CreateModal from '@/components/CreateModal'

// ICONS
// import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
// import { SidebarContext } from 'src/contexts/SidebarContext'
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import LoginIcon from '@mui/icons-material/Login'
import AddIcon from '@mui/icons-material/Add'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { FaDiscord } from 'react-icons/fa'
import { ConnectButton } from '@rainbow-me/rainbowkit'
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
  const {
    // address,
    isConnected,
  } = useAccount()
  const theme = useTheme()

  const [createOpen, setCreateOpen] = useState(false)
  const handleCreateOpen = () => {
    // console.log('HANDLE CREATE OPEN!')
    setCreateOpen(true)
  }
  const handleCreateClose = () => setCreateOpen(false)

  // retrieve current state of redux store
  const dispatch = useAppDispatch()

  const [loginOpen, setLoginOpen] = useState(false)
  const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)

  const { isWeb3AuthSuccess, isWeb3AuthSigning, isWeb3WalletConnected } =
    useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(setIsWeb3WalletConnected(isConnected))
  }, [isConnected, dispatch])

  // console.log({ createOpen })

  return (
    <HeaderWrapper
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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

      {/* <SortCreationsBar /> */}

      <Box sx={{ display: 'flex' }}>
        {/* {isWeb3WalletConnected ? (
          <Button
            id="create-button"
            variant="contained"
            onClick={handleCreateOpen}
            size="medium"
            endIcon={<AddIcon className="create-icon" fontSize={'large'} />}
            sx={{ mr: 1 }}
          >
            Create
          </Button>
        ) : null}

        {isWeb3WalletConnected ? (
          <Button
            id="mycreations-button"
            variant="outlined"
            // onClick={handleCreateOpen}
            size="medium"
            endIcon={
              <AccountCircleIcon className="account-icon" fontSize={'large'} />
            }
            sx={{ mr: 1 }}
          >
            My Creations
          </Button>
        ) : null} */}

        <ConnectButton />
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

      {/* <CreateModal isOpen={createOpen} onClose={handleCreateClose} /> */}

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
    </HeaderWrapper>
  )
}
