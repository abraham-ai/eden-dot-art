import React, { useState, MouseEvent } from 'react'

// NEXT
// import Link from 'next/link'

// REDUX
import { useAppSelector } from '@/hooks/hooks' // useAppDispatch

// WAGMI
import { useAccount } from 'wagmi'

// WEB3
import { ConnectButton } from '@rainbow-me/rainbowkit'

// MUI
import {
  Button,
  Box,
  Popover,
  styled,
  Slider,
  Switch,
  Typography,
} from '@mui/material'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import LightModeIcon from '@mui/icons-material/LightMode'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import LogoutIcon from '@mui/icons-material/Logout'

// CONST CSS
// const animSpeed = '300ms'
// const animCurve = 'cubic-bezier(0.23, 1, 0.32, 1)'

const boxShadowRegular =
  '0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 7px rgba(0, 0, 0, 0.05), 0px 12px 40px rgba(0, 0, 0, 0.1);'
const smallTranslate = 'translate3d(0px, -1px, 0px)'

// STYLES
const ConnectButtonStyles = styled(Box)(
  () => `
  // CONNECT 
  .connect-button-wrapper {
    display: flex;
    align-items: center;
    
  }
  .connect-button {
    height: 48px;
    border-radius: 30px;
    background-color: black;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 20px;
  }
  .connect-button:hover {
    cursor: pointer;
    box-shadow: ${boxShadowRegular};
    transform: ${smallTranslate};
  }
  .profile-button-main {
    background-color: white;
  }
  // ACCOUNT 
  .main-account-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
    border-radius: 50%;
    overflow: hidden;
    padding: 5px;
    margin: 5px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04);
    background: white;
  }
  .main-account-button:hover {
    border: 3px solid rgb(112, 99, 192);;
    background: white;
  }
  .account-profile-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    min-width: 36px;
    max-height: 36px;
    max-width: 36px;
    border-radius: 50%;
    overflow: hidden;
    padding: 5px;
    background-color: white;
  }
  .account-button-wrapper {
    border-radius: 50%;
    overflow: hidden;
    margin: 25px 0 0 10px;
  }
  // ETHERSCAN LINK
  .etherscan-link {
    height: 10px;
    text-decoration: none;
    background-color: lightgray;
    border-radius: 10px;
  }
  .etherscan-link:hover {
    background: gray;
  }
  `,
)

export const ConnectButtonCustom = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  // HOOKS
  const { address } = useAccount()
  const walletAddress = address

  // REDUX
  let appAddress = useAppSelector(state => state.address.value)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  appAddress = address === appAddress ? appAddress : address

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  let displayAddress = walletAddress
    ? walletAddress?.slice(0, 6)
    : walletAddress

  displayAddress = walletAddress
    ? (displayAddress += '...' + walletAddress.slice(-4))
    : walletAddress

  // MASONRY SLIDER
  const [masonryColumnCount, setMasonryColumnCount] = useState<number>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setMasonryColumnCount(newValue as number)
    return event ? event : null
  }

  // THEME PROPS
  const themeLabel = { inputProps: { 'aria-label': 'Switch demo' } }

  return (
    <ConnectButtonStyles>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <div
              className="connect-button-wrapper"
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      className="connect-button"
                      onClick={openConnectModal}
                      type="button"
                    >
                      Connect Wallet
                    </button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <button
                      className="connect-button"
                      onClick={openChainModal}
                      type="button"
                    >
                      Wrong network
                    </button>
                  )
                }

                return (
                  <>
                    <Button
                      className="main-account-button"
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                    >
                      <Box className="account-profile-wrapper">
                        <Blockies seed={walletAddress} scale={5} />
                      </Box>
                    </Button>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      sx={{ borderRadius: '24px', blur: 0 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          width: '100%',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          backgroundColor: 'white',
                          p: 1,
                        }}
                      >
                        <Button
                          className="connect-button-main"
                          onClick={openAccountModal}
                          type="button"
                          fullWidth
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <Box
                            className="account-button-wrapper"
                            sx={{
                              overflow: 'hidden',
                              borderRadius: '50%',
                              height: '48px',
                              width: '48px',
                            }}
                          >
                            <Blockies seed={walletAddress} scale={6} />
                          </Box>

                          <Box
                            className="profile-wrapper"
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                              pl: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeigth: 600,
                                fontSize: '1.2rem',
                              }}
                            >
                              {'Your Name'}
                            </Typography>
                            <Typography
                              sx={{ fontWeigth: 'bold', fontSize: '1rem' }}
                            >
                              {account.displayName}
                            </Typography>
                          </Box>
                        </Button>

                        <Box
                          className="wallet-wrapper"
                          sx={{
                            display: 'flex',
                            flex: 1,
                            p: 1,
                            border: '1px solid lightgray',
                            borderRadius: '12px',
                          }}
                        >
                          <Box>
                            <Typography sx={{ color: 'gray', fontWeight: 600 }}>
                              {'Wallet Balance'}
                            </Typography>
                            <Typography
                              sx={{
                                color: 'black',
                                fontSize: '1.2rem',
                                fontWeight: 600,
                              }}
                            >
                              {account.displayBalance}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                            }}
                          >
                            <a
                              className="etherscan-link"
                              href={`https://www.etherscan.io/address/${walletAddress}`}
                              rel="noopener noreferrer"
                              target="_blank"
                              style={{
                                height: '20px',
                                borderRadius: '5px',
                                marginLeft: '5px',
                              }}
                            >
                              <Typography
                                className="etherscan-address"
                                sx={{
                                  p: 1,
                                  color: 'black',
                                  height: 1,
                                  width: 'auto',
                                  display: 'flex',
                                  alignItems: 'center',
                                  borderRadius: 0.5,
                                  fontSize: '.8rem',
                                  fontFamily: 'courier',
                                  ml: 3,
                                  background: 'rgba(0, 0, 0, 0.05)',
                                }}
                              >
                                {displayAddress}
                              </Typography>
                            </a>

                            <Button
                              className="connect-button"
                              type="button"
                              onClick={openChainModal}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: 35,
                                mt: 0.5,
                                ml: 0.5,
                              }}
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 30,
                                    height: 30,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 10,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 30, height: 30 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </Button>
                          </Box>
                        </Box>

                        <Button
                          startIcon={<SettingsIcon />}
                          fullWidth
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            mt: 1,
                          }}
                        >
                          Settings
                        </Button>

                        <Button
                          startIcon={<HelpIcon />}
                          fullWidth
                          sx={{ display: 'flex', justifyContent: 'flex-start' }}
                        >
                          Help
                        </Button>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            ml: 1,
                            alignItems: 'center',
                          }}
                        >
                          <LightModeIcon sx={{ color: '#8C7CF0' }} />
                          <Typography
                            sx={{ color: '#8C7CF0', fontWeight: 600, mr: 4 }}
                          >
                            Theme
                          </Typography>
                          <Switch {...themeLabel} defaultChecked />
                        </Box>

                        <Box sx={{ pl: 1, pr: 1, width: '100%' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              width: '100%',
                            }}
                          >
                            <ViewColumnIcon sx={{ color: '#8C7CF0' }} />
                            <Typography
                              sx={{
                                pr: 2,
                                color: '#8C7CF0',
                                fontWeight: 600,
                                ml: 1,
                              }}
                            >
                              Masonry
                            </Typography>
                            <Slider
                              className="masonry-count-slider"
                              aria-label="Column Count"
                              defaultValue={6}
                              valueLabelDisplay="auto"
                              step={1}
                              marks
                              min={4}
                              max={12}
                              value={masonryColumnCount}
                              onChange={handleChange}
                              sx={{ mr: 2, ml: 1 }}
                            />
                            {/* <div
                              className="display-column-count"
                              style={{
                                padding: '0 10px',
                                marginLeft: '10px',
                                color: '#8C7CF0',
                              }}
                            >
                              {masonryColumnCount}
                            </div> */}
                          </Box>
                        </Box>

                        <Button
                          startIcon={<LogoutIcon />}
                          fullWidth
                          sx={{ display: 'flex', justifyContent: 'flex-start' }}
                        >
                          Disconnect
                        </Button>
                      </Box>
                    </Popover>
                  </>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </ConnectButtonStyles>
  )
}

export default ConnectButtonCustom
