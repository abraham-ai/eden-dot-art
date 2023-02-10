'use client'

import React, { useState, useContext, useEffect } from 'react'

// WEB3
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// LIBS
import Blockies from 'react-blockies'

// ANTD
import { Popover, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import AccountPopover from '@/components/ConnectButtonCustom/AccountPopover/AccountPopover'

// CSS
import styled from 'styled-components'

// ICONS
// import SettingsIcon'
// import HelpIcon
// import LightModeIcon
// import ViewColumnIcon
// import LogoutIcon

// CONST CSS
// const animSpeed = '300ms'
// const animCurve = 'cubic-bezier(0.23, 1, 0.32, 1)'

const boxShadowRegular =
  '0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 7px rgba(0, 0, 0, 0.05), 0px 12px 40px rgba(0, 0, 0, 0.1);'
const smallTranslate = 'translate3d(0px, -1px, 0px)'

// STYLES
const ConnectButtonStyles = styled.section`
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
    margin: 0;
    padding: 0;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05),
      0px 8px 40px rgba(0, 0, 0, 0.04);
    background: white;
    overflow: hidden;
  }
  .main-account-button:hover {
    background: white;
    min-height: 48px;
    min-width: 48px;
    max-height: 48px;
    max-width: 48px;
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
  .account-profile-wrapper:hover {
    border: 3px solid rgb(112, 99, 192);
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
`

export const ConnectButtonCustom = () => {
  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  // HOOKS
  const { address = '', isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const walletAddress = address

  // CONTEXT
  const context = useContext(AppContext)

  const {
    authToken,
    isModalVisible,
    isWeb3WalletConnected,
    isWeb3AuthSuccess,
    setAuthToken,
    setIsWeb3WalletConnected,
    setIsWeb3AuthSuccess,
  } = context

  // const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   open ? setOpen(false) : setOpen(true)
  //   // <setAnchorEl>(event.currentTarget)
  // }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  // appAddress = address === appAddress ? appAddress : address

  // const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  let displayAddress = walletAddress
    ? walletAddress?.slice(0, 6)
    : walletAddress

  displayAddress = walletAddress
    ? (displayAddress += '...' + walletAddress.slice(-4))
    : walletAddress

  console.log({ isModalVisible })
  console.log({ authToken })
  console.log({ isConnected, isWeb3WalletConnected, isWeb3AuthSuccess })

  useEffect(() => {
    if (isWeb3WalletConnected === false && isConnected === true) {
      setIsWeb3WalletConnected(isConnected)
    } else if (typeof isConnected === 'undefined' || isConnected === false) {
      setIsWeb3WalletConnected(false)
      setIsWeb3AuthSuccess(false)
      setAuthToken('')
    }
  }, [isConnected])

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

          {
            console.log({ connected, isWeb3WalletConnected, isWeb3AuthSuccess })
          }

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
                if (!isWeb3WalletConnected && !connected) {
                  return (
                    <Button
                      className="connect-button"
                      onClick={openConnectModal}
                      type="button"
                    >
                      {/* { width < 930 ? 'Connect' : 'Connect Wallet' } */}
                      <Text style={{ color: 'white' }}>Connect Wallet</Text>
                    </Button>
                  )
                }

                if (connected && chain.unsupported) {
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
                  <Popover
                    id={id}
                    content={
                      <AccountPopover
                        openAccountModal={openAccountModal}
                        openChainModal={openChainModal}
                        walletAddress={walletAddress}
                        displayAddress={displayAddress}
                        chain={chain}
                        account={account}
                        disconnect={disconnect}
                      />
                    }
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                    placement="bottom"
                    style={{ borderRadius: '24px' }}
                  >
                    <div className="main-account-button">
                      <div className="account-profile-wrapper">
                        <Blockies seed={walletAddress} scale={5} />
                      </div>
                    </div>
                  </Popover>
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
