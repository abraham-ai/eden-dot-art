'use client'

import React, { useState, useContext, useEffect, useCallback } from 'react'

// FETCH
import axios from 'axios'

// WEB3
import { useAccount, useDisconnect } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// LIBS
// import Blockies from 'react-blockies'

// ANTD
import { Popover, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import AccountPopover from '@/components/Account/SettingsButton/AccountPopover/AccountPopover'

// CSS
import SettingsButtonStyles from '@/components/Account/SettingsButton/SettingsButtonStyles'

// ICONS
import { SettingTwoTone, SettingOutlined } from '@ant-design/icons'
// import SettingsIcon'
// import HelpIcon
// import LightModeIcon
// import ViewColumnIcon
// import LogoutIcon

// CONST CSS
// const animSpeed = '300ms'
// const animCurve = 'cubic-bezier(0.23, 1, 0.32, 1)'

export const SettingsButton = () => {
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
    userId,
    setUserId,
  } = context

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  // console.log('CONNECT BUTTON CUSTOM')
  // console.log({ userId, isWeb3WalletConnected, isWeb3AuthSuccess })

  const id = open ? 'account-popover' : undefined

  const [isHover, setIsHover] = useState(false)

  let displayAddress = walletAddress
    ? walletAddress?.slice(0, 6)
    : walletAddress

  displayAddress = walletAddress
    ? (displayAddress += '...' + walletAddress.slice(-4))
    : walletAddress

  const checkAuthToken = useCallback(async () => {
    // console.log('CHECK AUTH TOKEN - USE CALLBACK')
    const response = await axios.post('/api/user', {})

    if (response.data.message === 'Session Cookie Found') {
      const { token, userId } = response.data

      setIsWeb3AuthSuccess(true)
      setAuthToken(token)
      setUserId(userId)
      // console.log({ userId, token })
    }
  }, [setAuthToken, setUserId, setIsWeb3AuthSuccess])

  useEffect(() => {
    if (isWeb3WalletConnected === false && isConnected === true) {
      setIsWeb3WalletConnected(isConnected)
    } else if (typeof isConnected === 'undefined' || isConnected === false) {
      setIsWeb3WalletConnected(false)
      setIsWeb3AuthSuccess(false)
      setUserId('')
      setAuthToken('')
    } else if (isWeb3WalletConnected === true && isWeb3AuthSuccess === false) {
      checkAuthToken()
    }
  }, [
    isConnected,
    setAuthToken,
    userId,
    setUserId,
    isWeb3WalletConnected,
    setIsWeb3WalletConnected,
    isWeb3AuthSuccess,
    setIsWeb3AuthSuccess,
    checkAuthToken,
  ])

  return (
    <SettingsButtonStyles>
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
                    <Button
                      className="connect-button"
                      onClick={openConnectModal}
                    >
                      {/* { width < 930 ? 'Connect' : 'Connect Wallet' } */}
                      <Text style={{ color: 'white' }}>Connect Wallet</Text>
                    </Button>
                  )
                }

                /*
                if (connected && chain.unsupported) {
                  return (
                    <Button
                      className="connect-button"
                      onClick={openChainModal}
                    >
                      <Text style={{ color: 'white' }}>Wrong network</Text>
                    </Button>
                  )
                }
                */

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
                    <Button
                      className="nav-account-settings"
                      shape={'circle'}
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                      icon={isHover ? <SettingTwoTone /> : <SettingOutlined />}
                    />
                  </Popover>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </SettingsButtonStyles>
  )
}

export default SettingsButton
