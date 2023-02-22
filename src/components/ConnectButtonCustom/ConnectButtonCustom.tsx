'use client'

import React, { useState, useContext, useEffect } from 'react'

// WEB3
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// LIBS
import Blockies from 'react-blockies'

// ANTD
import { Popover, Typography } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import AccountPopover from '@/components/ConnectButtonCustom/AccountPopover/AccountPopover'

// CSS
import { ConnectButtonCustomStyles } from './ConnectButtonCustomStyles'

// ICONS
// import SettingsIcon'
// import HelpIcon
// import LightModeIcon
// import ViewColumnIcon
// import LogoutIcon

// CONST CSS
// const animSpeed = '300ms'
// const animCurve = 'cubic-bezier(0.23, 1, 0.32, 1)'

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
    isWeb3WalletConnected,
    isWeb3AuthSuccess,
    setAuthToken,
    setIsWeb3WalletConnected,
    setIsWeb3AuthSuccess,
    setUserId,
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
  const id = open ? 'account-popover' : undefined

  let displayAddress = walletAddress
    ? walletAddress?.slice(0, 6)
    : walletAddress

  displayAddress = walletAddress
    ? (displayAddress += '...' + walletAddress.slice(-4))
    : walletAddress

  useEffect(() => {
    if (isWeb3WalletConnected === false && isConnected === true) {
      setIsWeb3WalletConnected(isConnected)
    } else if (typeof isConnected === 'undefined' || isConnected === false) {
      setIsWeb3WalletConnected(false)
      setIsWeb3AuthSuccess(false)
      setUserId('')
      setAuthToken('')
    }
  }, [isConnected])

  return (
    <ConnectButtonCustomStyles>
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
                if (
                  !isWeb3WalletConnected &&
                  !connected &&
                  !authToken &&
                  !isWeb3AuthSuccess
                ) {
                  return (
                    <button
                      className="connect-button"
                      onClick={openConnectModal}
                      type="button"
                    >
                      {/* { width < 930 ? 'Connect' : 'Connect Wallet' } */}
                      <Text style={{ color: 'white' }}>Connect Wallet</Text>
                    </button>
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
                        <Blockies seed={walletAddress} scale={6} />
                      </div>
                    </div>
                  </Popover>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </ConnectButtonCustomStyles>
  )
}

export default ConnectButtonCustom
