'use client'

import React, { useState, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// COMPONENTS
import Auth from '@/components/Auth/Auth'

// ANTD
import { Typography, Modal } from 'antd'
const { Title, Text } = Typography

// COMPONENTS
import AppLogo from '@/components/AppLogo/AppLogo'

// ICONS
// import CloseIcon

export default function CreateSignInJWT() {
  const { address } = useAccount()

  const context = useContext(AppContext)
  const {
    isModalVisible,
    setIsModalVisible,
    isWeb3AuthSuccess,
    isWeb3WalletConnected,
    authToken,
  } = context

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isSuccess } = useSignMessage({
    message: appMessage,
  }) // isLoading, isError, signMessage

  console.log({ isModalVisible })
  console.log({ isWeb3WalletConnected, isWeb3AuthSuccess })

  return (
    <Modal
      open={isModalVisible}
      mask
      maskClosable
      keyboard
      onCancel={handleCancel}
      style={{
        width: '480px',
        background: 'white',
        border: '2px solid #000',
        borderRadius: '25px',
        padding: 0,
        overflow: 'hidden',
      }}
      footer={<></>}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title level={2} style={{ color: 'rgb(0 80 30)' }}>
          Welcome to Eden
        </Title>
        <AppLogo logo="eden" size="x-large" />

        <Text
          style={{
            paddingTop: 30,
            color: 'rgb(0 80 30)',
            textAlign: 'center',
            fontSize: '1rem',
          }}
        >
          Sign the message in your wallet to continue
        </Text>

        <Title
          level={4}
          style={{
            paddingTop: 10,
            paddingBottom: 30,
            color: 'rgb(0 80 30)',
            textAlign: 'center',
            fontWeight: 'normal',
          }}
        >
          {
            'Eden uses this signature to verify that you’re the owner of this Ethereum address.'
          }
        </Title>

        <div>
          <Auth onModalCancel={handleCancel} />
        </div>

        {isSuccess && <Text>Signature: {data}</Text>}

        {isWeb3AuthSuccess && (
          <Text style={{ wordBreak: 'break-word', color: 'black' }}>
            Auth Token: {authToken}
          </Text>
        )}
      </div>
    </Modal>
  )
}
