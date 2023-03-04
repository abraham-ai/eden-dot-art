'use client'

import React, { useState, useContext } from 'react'

// FETCH
import axios, { AxiosError } from 'axios'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ANTD
import { Typography, Slider, Button } from 'antd'
const { Text } = Typography

// LIBS
// import Blockies from 'react-blockies'

// COMPONENTS
// import CreditBalance from '@/components/Auth/CreditBalance'
// import ApiKeys from '@/components/ApiKeys/ApiKeys'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

// STYLES
import AccountPopoverStyles from './AccountPopoverStyles'

// {
//   openAccountModal,
//   walletAddress,
//   chain,
//   account,
//   disconnect,
//   openChainModal,
//   displayAddress,
// }

export const AccountPopover = () => {
  // HOOKS
  const { isConnected, setIsConnected } = useContext(AppContext);

  // MASONRY SLIDER
  const [masonryColumnCount, setMasonryColumnCount] = useState<number>(3)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setMasonryColumnCount(newValue as number)
    return event ? event : null
  }

  const handleDisconnect = async () => {
    try {
      const resp = await axios.post('/api/logout')
      if (resp.status === 200) {
        setIsConnected(false);
        disconnect();
      }
    } catch (error: any) {
      console.error(`Error: ${error}`)
    }
  }

  return isConnected ? (
    <AccountPopoverStyles>
      {/* <Button className="account-button-main" onClick={openAccountModal}>
        <div className="account-button-wrapper">
          <Blockies seed={walletAddress} scale={6} />
        </div>

        <div className="profile-wrapper">
          <Text className="profile-name">{'Your Name'}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {account.displayName}
          </Text>
        </div>
      </Button> */}

      {/* <div className="wallet-wrapper">
        <div className="etherscan-wrapper">
          <a
            className="etherscan-link"
            href={`https://www.etherscan.io/address/${walletAddress}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text className="etherscan-address">{displayAddress}</Text>
          </a>

          <Button className="connect-button" onClick={openChainModal}>
            {chain.hasIcon && (
              <div
                className="chain-icon-wrapper"
                style={{ background: chain.iconBackground }}
              >
                {chain.iconUrl && (
                  <img
                    className="chain-icon"
                    alt={chain.name ?? 'Chain icon'}
                    src={chain.iconUrl}
                  />
                )}
              </div>
            )}
            {chain.name}
          </Button>
        </div>
      </div> */}

      <div className="theme-settings-wrapper">
        {/* <LightModeIcon style={{ color: '#8C7CF0' }} /> */}
        <Text className="theme-toggle">Theme</Text>
        <ThemeToggle />
      </div>

      <div className="account-settings-wrapper">
        <div className="masonry-count-wrapper">
          {/* <ViewColumnIcon style={{ color: '#8C7CF0' }} /> */}
          <Text className="masonry-text-count">Masonry</Text>
          <Slider
            className="masonry-count-slider"
            aria-label="Column Count"
            defaultValue={6}
            step={1}
            min={4}
            max={12}
            value={masonryColumnCount}
            onChange={() => handleChange}
          />
        </div>
      </div>

      <Button className="connect-button" onClick={() => handleDisconnect}>
        {'Disconnect'}
      </Button>
    </AccountPopoverStyles>
  ) : (
    <Text>{'Not Connected'}</Text>
  )
}

export default AccountPopover
