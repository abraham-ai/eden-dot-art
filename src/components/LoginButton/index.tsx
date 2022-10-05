import React, { useEffect, useState } from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import {
  setIsWeb3AuthSigning,
  setIsWeb3WalletConnected,
} from '@/redux/slices/authSlice'

// MUI
import { Button, Box, Backdrop, Modal, Typography } from '@mui/material'

// COMPONENTS
import AppLogo from '@/components/AppLogo'
import CircularProgress from '@mui/material/CircularProgress'

// WEB3 HOOKS
import { useAccount } from 'wagmi'

// ICONS
import LoginIcon from '@mui/icons-material/Login'
import { FaDiscord } from 'react-icons/fa'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const BoxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function LoginButton() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const handleLoginOpen = () => setIsLoginOpen(true)
  const handleLoginClose = () => setIsLoginOpen(false)
  const { isConnected } = useAccount()

  // retrieve current state of redux store
  const dispatch = useAppDispatch()

  const { isWeb3WalletConnected, isWeb3AuthSigning } = useAppSelector(
    state => state.auth,
  )

  // useEffect(() => {
  //   let isSubscribed = true

  //   if (isSubscribed) {
  //     dispatch(setIsWeb3WalletConnected(isConnected))
  //   }

  //   return () => {
  //     isSubscribed = false
  //   }
  // }, [isConnected, dispatch])

  const loginModal = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isLoginOpen}
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
            alignItems: 'center',
          }}
        >
          <Box sx={{ pb: 3 }}>
            <AppLogo logo={'eden'} size={'large'} />
          </Box>
          <Typography variant={'h4'}>
            Sign-in to create with Eden Collage.
          </Typography>
          {!isWeb3WalletConnected ? (
            <Box sx={{ m: 3 }}>
              <ConnectButton />
            </Box>
          ) : null}

          <Typography variant={'h4'}>Or</Typography>
          <Button variant={'contained'} sx={{ mt: 3 }}>
            Connect Discord
            <FaDiscord style={{ fontSize: '2rem', paddingLeft: 10 }} />
          </Button>
        </Box>
      </Box>
    </Modal>
  )

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 3 }}>
          <ConnectButton />
        </Box>

        <Typography variant={'h4'}>Or</Typography>
        <Button variant={'contained'} sx={{ ml: 3 }}>
          Connect Discord
          <FaDiscord style={{ fontSize: '2rem', paddingLeft: 10 }} />
        </Button>
      </Box>
    </>
  )
}

// <Button
//   id="login-button"
//   startIcon={
//     isWeb3AuthSigning ? (
//       <CircularProgress color={'secondary'} />
//     ) : (
//       <LoginIcon className="login-cion" fontSize={'large'} />
//     )
//   }
//   variant="contained"
//   onClick={handleLoginOpen}
// >
//   {isWeb3AuthSigning ? 'Login-in...' : 'Login App'}
// </Button>

{
  /* {isLoginOpen ? loginModal : null} */
}
