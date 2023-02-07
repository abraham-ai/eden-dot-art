'use client'

import React, { useState, MouseEvent } from 'react'

// WAGMI
import { useAccount } from 'wagmi'

// WEB3
import { ConnectButton } from '@rainbow-me/rainbowkit'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// LIBS
import Blockies from 'react-blockies'

// ANTD
import { Button, Popover } from 'antd';

// EDEN COMPONENTS
import AccountPopover from '@/components/ConnectButtonCustom/AccountPopover/AccountPopover'

// CSS
import styled from 'styled-components'


// ICONS
// import SettingsIcon from '@mui/icons-material/Settings'
// import HelpIcon from '@mui/icons-material/Help'
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
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04);
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
  const [open, setOpen] = useState(false);


  // HOOKS
  const { address = '' } = useAccount()
  const walletAddress = address
  const { width } = useWindowDimensions()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    open ? setOpen(false) : setOpen(true)
    // <setAnchorEl>(event.currentTarget)
  }

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
                      { width < 930 ? 'Connect' : 'Connect Wallet' }
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
                  <Popover
                    id={id}
                    content={
                      <AccountPopover
                        openAccountModal={openAccountModal} 
                        openChainModal={openChainModal}
                        walletAddress={walletAddress} 
                        displayAddress={displayAddress}
                        chain={chain}
                        account={account}/>
                      }
                    trigger='click'
                    open={open}
                    onOpenChange={handleOpenChange}
                    placement='bottom'
                    style={{ borderRadius: '24px' }}
                  >
                    <div className='main-account-button'                    > 
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
