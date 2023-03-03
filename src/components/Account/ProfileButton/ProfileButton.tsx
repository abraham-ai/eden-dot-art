'use client'

import React, { useState, useContext, useCallback, useEffect } from 'react'

// NEXTJS
import Link from 'next/link'

// WEB3
import { useAccount } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// LIBS
import Blockies from 'react-blockies'

// CSS
import ProfileButtonStyles from '@/components/Account/ProfileButton/ProfileButtonStyles'

// FETCH
import axios from 'axios'

// LIBS
// import Blockies from 'react-blockies'

// ANTD
import { Typography, Button } from 'antd'
const { Text } = Typography

export const ProfileButton = () => {
  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  // HOOKS
  const { address = '', isConnected } = useAccount()
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
    <ProfileButtonStyles>
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
                  <Link
                    href={`/creator/${address}`}
                    className="main-account-button"
                  >
                    <div className="account-profile-wrapper">
                      <Blockies seed={address} scale={6} />
                    </div>
                  </Link>
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </ProfileButtonStyles>
  )
}

export default ProfileButton
