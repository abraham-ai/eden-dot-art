import { useContext } from 'react'
import {
  Box,
  alpha,
  lighten,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Typography,
} from '@mui/material'

// ROUTER
import Link from 'next/link'

// NAV
// import { EdenNavTop } from '../../../components';

// COMPONENTS
import SpeedDial from '@/components/SpeedDial'

// ICONS
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import { SidebarContext } from 'src/contexts/SidebarContext'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// VIEW ICONS

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
            left: ${theme.sidebar.width};
            width: auto;
        }
        .menu-item {
          display: flex;
        }
`,
)

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext)
  const theme = useTheme()

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
      {/* <EdenNavTop /> */}

      {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack> */}

      <Box display="flex" alignItems="center">
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
      </Box>

      <Link href="/creations" className="nav-link-wrapper">
        <Typography variant={'h4'} className="nav-link-text">
          CREATIONS
        </Typography>
      </Link>

      <Link href="/garden" className="nav-link-wrapper">
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
      </Link>

      <SpeedDial />
      <ConnectButton />
    </HeaderWrapper>
  )
}

export default Header
