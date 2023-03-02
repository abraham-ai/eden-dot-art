'use client'

import React, { useState, useContext } from 'react'

// FETCH
import axios from 'axios'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// WEB3
import { useAccount } from 'wagmi'

// ANTD
import { Typography, Slider } from 'antd'
const { Text } = Typography

// LIBS
import Blockies from 'react-blockies'

// COMPONENTS
// import CreditBalance from '@/components/Auth/CreditBalance'
// import ApiKeys from '@/components/ApiKeys/ApiKeys'

// STYLES
import { AccountPopoverStyles } from './AccountPopoverStyles'

export const AccountPopover = ({
  openAccountModal,
  walletAddress,
  chain,
  account,
  disconnect,
  openChainModal,
  displayAddress,
}) => {
  // HOOKS
  const { isConnected } = useAccount()
  const { setAuthToken, setIsWeb3WalletConnected, setUserId } =
    useContext(AppContext)

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
        setAuthToken('')
        setIsWeb3WalletConnected(false)
        setUserId('')
        disconnect()
      }
    } catch (error: any) {
      console.error(`Error: ${error.response.data.error}`)
    }
  }

  return isConnected ? (
    <AccountPopoverStyles>
      <button className="account-button-main" onClick={openAccountModal}>
        <div className="account-button-wrapper">
          <Blockies seed={walletAddress} scale={6} />
        </div>

        <div className="profile-wrapper">
          <Text className="profile-name">{'Your Name'}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {account.displayName}
          </Text>
        </div>
      </button>

      <div className="wallet-wrapper">
        {/* <div>
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

        <ApiKeys /> */}

        <div className="etherscan-wrapper">
          <a
            className="etherscan-link"
            href={`https://www.etherscan.io/address/${walletAddress}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text className="etherscan-address">{displayAddress}</Text>
          </a>

          <button className="connect-button" onClick={openChainModal}>
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
          </button>
        </div>
      </div>

      <div className="theme-settings-wrapper">
        {/* <LightModeIcon style={{ color: '#8C7CF0' }} /> */}
        <Text className="theme-toggle">Theme</Text>
        {/* <ThemeToggle /> */}
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

      <button className="connect-button" onClick={handleDisconnect}>
        {'Disconnect'}
      </button>
    </AccountPopoverStyles>
  ) : (
    <Text>{'Not Connected'}</Text>
  )
}

export default AccountPopover
