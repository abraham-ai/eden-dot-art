'use client'

import React, { useState } from 'react'

// WEB3
import { useAccount } from 'wagmi'

// ANTD
import { Button, Typography, Slider } from 'antd';
const { Text } = Typography;

// CSS
import styled from 'styled-components'

// LIBS
import Blockies from 'react-blockies'

// COMPONENTS
// import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import CreditBalance from '@/components/Auth/CreditBalance'
import ApiKeys from '@/components/ApiKeys/ApiKeys'


export const AccountPopover = ({ 
    openAccountModal, 
    walletAddress, 
    chain, 
    account, 
    openChainModal, 
    displayAddress 
  }) => {
    
      const { isConnected } = useAccount()

      // MASONRY SLIDER
      const [masonryColumnCount, setMasonryColumnCount] = useState<number>(3)
  
      const handleChange = (event: Event, newValue: number | number[]) => {
        setMasonryColumnCount(newValue as number)
        return event ? event : null
      }
  
    return (
      isConnected ? (
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
      ) : <Text>{'Not Connected'}</Text>
      
    )
  }

export default AccountPopover