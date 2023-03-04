'use client'

import React, { useState, useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// WEB3
import { useSignMessage, useAccount } from 'wagmi'

// COMPONENTS
import EthereumAuth from '@/components/Auth/EthereumAuth'

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

  const {
    isConnected,
    isSignInModalOpen,
    setIsSignInModalOpen,
  } = useContext(AppContext)

  const handleCancel = () => {
    setIsSignInModalOpen(false)
  }

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isSuccess } = useSignMessage({
    message: appMessage,
  });

  return (
    <Modal
      className="create-sign-in-jwt-modal"
      open={isSignInModalOpen}
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
          <AppLogo logo="eden" size="large" />

          <Title className="sign-in-message-cntd" level={4}>
            {
              'Eden uses a signature from your wallet to verify that you’re the owner of this Ethereum address.'
            }
          </Title>

          <div>
            <EthereumAuth onModalCancel={handleCancel} />
         </div>

          {isSuccess && (
            <div className="sign-in-signature-wrapper">
              <p className="sign-in-signature">Signature:</p>
              <p className="sign-in-signature">{data}</p>
            </div>
          )}

        </div>
      </CreateSignInJWTStyles>
    </Modal>
  )
}
