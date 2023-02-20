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

// STYLES
import { CreateSignInJWTStyles } from './CreateSignInJWTStyles'

export default function CreateSignInJWT() {
  const { address } = useAccount()

  const context = useContext(AppContext)
  const {
    isSignInModalVisible,
    setIsSignInModalVisible,
    isWeb3AuthSuccess,
    isWeb3WalletConnected,
    authToken,
  } = context

  const handleCancel = () => {
    setIsSignInModalVisible(false)
  }

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isSuccess } = useSignMessage({
    message: appMessage,
  }) // isLoading, isError, signMessage

  console.log({ isSignInModalVisible })
  console.log({ isWeb3WalletConnected, isWeb3AuthSuccess })

  return (
    <Modal
      id="create-sign-in-jwt-modal"
      open={isSignInModalVisible}
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
      <CreateSignInJWTStyles>
        <div className="sign-in-modal-inner-wrapper">
          <Title level={2} className="sign-in-header-text">
            Welcome to Eden
          </Title>
          <AppLogo logo="eden" size="x-large" />

          <Text className="sign-in-message">
            Sign the message in your wallet to continue
          </Text>

          <Title className="sign-in-message-cntd" level={4}>
            {
              'Eden uses this signature to verify that you’re the owner of this Ethereum address.'
            }
          </Title>

          <div>
            <Auth onModalCancel={handleCancel} />
          </div>

          {isSuccess && (
            <div className="sign-in-signature-wrapper">
              <p className="sign-in-signature">Signature:</p>
              <p className="sign-in-signature">{data}</p>
            </div>
          )}

          {isWeb3AuthSuccess && (
            <div className="sign-in-auth-token-wrapper">
              <Text className="sign-in-auth-token-header">Auth Token:</Text>
              <Text className="sign-in-auth-token">{authToken}</Text>
            </div>
          )}
        </div>
      </CreateSignInJWTStyles>
    </Modal>
  )
}
