import { useEffect } from 'react'
// useCallback,

// ROUTER
import Link from 'next/link'

// REDUX
import { useAppDispatch } from '@/hooks/hooks'
//

// MUI
import {
  alpha,
  // Button,
  Box,
  lighten,
  styled,
  useTheme,
  Typography,
} from '@mui/material'

// WEB3 HOOKS
import { useAccount } from 'wagmi'

// REDUX
import { setIsWeb3WalletConnected } from '@/redux/slices/authSlice'

// COMPONENTS
import Logo from '@/components/Logo'
// import LoginButton from '@/components/LoginButton'
import SignInJWT from '@/components/SignInJWT'

// ICONS
import { ConnectButton } from '@rainbow-me/rainbowkit'

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
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
  const theme = useTheme()

  // WAGMI HOOKS
  const { isConnected } = useAccount()

  // retrieve current state of redux store
  const dispatch = useAppDispatch()

  // const { isWeb3AuthSuccess, isWeb3WalletConnected } = useAppSelector(
  //   state => state.auth,
  // )

  useEffect(() => {
    dispatch(setIsWeb3WalletConnected(isConnected))
  }, [isConnected, dispatch])

  // const handleAccountNav = useCallback(() => {
  //   if (!isWeb3WalletConnected) {
  //     return <LoginButton />
  //   } else if (isWeb3WalletConnected && !isWeb3AuthSuccess) {
  //     return (
  //       <>
  //         <SignInJWT />
  //         <ConnectButton />
  //       </>
  //     )
  //   } else if (isWeb3WalletConnected && isWeb3AuthSuccess) {
  //     return <ConnectButton />
  //   }
  // }, [isWeb3WalletConnected, isWeb3AuthSuccess])

  return (
    <HeaderWrapper
      display="flex"
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* {handleAccountNav()} */}

        {/* <LoginButton /> */}
        <SignInJWT />
        <ConnectButton />
      </Box>
    </HeaderWrapper>
  )
}
