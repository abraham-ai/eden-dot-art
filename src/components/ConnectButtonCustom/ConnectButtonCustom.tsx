'use client'

import React, { useState, MouseEvent } from 'react'

// NEXT
// import Link from 'next/link'

// WAGMI
import { useAccount } from 'wagmi'

// WEB3
import { ConnectButton } from '@rainbow-me/rainbowkit'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// ANTD
import { Button, Typography, Popover, Slider } from 'antd';
const { Text } = Typography;

// CSS
import styled from 'styled-components'

// LIBS
import Blockies from 'react-blockies'

// COMPONENTS
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import CreditBalance from '@/components/Auth/CreditBalance'
import ApiKeys from '@/components/ApiKeys/ApiKeys'

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
`

export const AccountPopoverContent = ({ 
  openAccountModal, 
  walletAddress, 
  chain, 
  account, 
  openChainModal, 
  displayAddress 
}) => {
  
    // MASONRY SLIDER
    const [masonryColumnCount, setMasonryColumnCount] = useState<number>(3)

    const handleChange = (event: Event, newValue: number | number[]) => {
      setMasonryColumnCount(newValue as number)
      return event ? event : null
    }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 10,
      }}
    >
      <Button
        className="connect-button-main"
        onClick={openAccountModal}
        block
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <div
          className="account-button-wrapper"
          style={{
            overflow: 'hidden',
            borderRadius: '50%',
            height: '48px',
            width: '48px',
          }}
        >
          <Blockies seed={walletAddress} scale={6} />
        </div>

        <div
          className="profile-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: 1,
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: '1.2rem',
            }}
          >
            {'Your Name'}
          </Text>
          <Text
            style={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            {account.displayName}
          </Text>
        </div>
      </Button>

      <div
        className="wallet-wrapper"
        style={{
          display: 'flex',
          flex: 1,
          padding: 10,
          border: '1px solid lightgray',
          borderRadius: '12px',
        }}
      >
        <div>
          <Text style={{ color: 'gray', fontWeight: 600 }}>
            {'Wallet Balance'}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: '1.2rem',
              fontWeight: 600,
            }}
          >
            {account.displayBalance}
          </Text>
          <CreditBalance />
        </div>

        
        <ApiKeys />

        <div
          style={{
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
            <Text
              className="etherscan-address"
              style={{
                padding: 10,
                color: 'black',
                height: 1,
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 0.5,
                fontSize: '.8rem',
                fontFamily: 'courier',
                marginLeft: 3,
                background: 'rgba(0, 0, 0, 0.05)',
              }}
            >
              {displayAddress}
            </Text>
          </a>

          <Button
            className='connect-button'
            onClick={openChainModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: 35,
              marginTop: 0.5,
              marginLeft: 0.5,
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
        </div>
      </div>

      {/* <Button
        icon={<SettingsIcon />}
        block
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginTop: 10,
        }}
      >
        Settings
      </Button> */}

      {/* <Button
        icon={<HelpIcon />}
        block
        style={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        Help
      </Button> */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: 10,
          alignItems: 'center',
        }}
      >
        {/* <LightModeIcon style={{ color: '#8C7CF0' }} /> */}
        <Text
          style={{ color: '#8C7CF0', fontWeight: 600, marginRight: 40 }}
        >
          Theme
        </Text>
        {/* <ThemeToggle /> */}
      </div>

      <div style={{ paddingLeft: 10, paddingRight: 10, width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* <ViewColumnIcon style={{ color: '#8C7CF0' }} /> */}
          <Text
            style={{
              paddingRight: 2,
              color: '#8C7CF0',
              fontWeight: 600,
              marginLeft: 1,
            }}
          >
            Masonry
          </Text>
          <Slider
            className="masonry-count-slider"
            aria-label="Column Count"
            defaultValue={6}
            step={1}
            min={4}
            max={12}
            value={masonryColumnCount}
            onChange={() => handleChange}
            style={{ marginRight: 20, marginLeft: 10, display: 'flex', flex: 1, alignItems: 'center' }}
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
        </div>
      </div>

      <Button
        icon={<Text>{'Logout'}</Text>}
        block
        style={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        Disconnect
      </Button>
    </div>
  )
}

export const ConnectButtonCustom = () => {
  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false);


  // HOOKS
  const { address = '' } = useAccount()
  const walletAddress = address
  const { width } = useWindowDimensions()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    open ? setOpen(false) : setOpen(true)
    // setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
    // setAnchorEl(null)
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
                      <AccountPopoverContent
                        openAccountModal={openAccountModal} 
                        openChainModal={openChainModal}
                        walletAddress={walletAddress} 
                        displayAddress={displayAddress}
                        chain={chain}
                        account={account}/>
                      }
                    trigger='click'
                    open={open}
                    onOpenChange={() => handleClose()}
                    placement='bottom'
                    style={{ borderRadius: '24px' }}
                  >
                    <Button
                      className="main-account-button"
                      aria-describedby={id}
                      onClick={(event) => handleClick(event)}
                    >
                      <div className="account-profile-wrapper">
                        <Blockies seed={walletAddress} scale={5} />
                      </div>
                    </Button>
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
