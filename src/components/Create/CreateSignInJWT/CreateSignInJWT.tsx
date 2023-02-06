import React, { useState } from 'react'

// REDUX
import { useAppSelector } from '@/hooks/redux'

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

export default function CreateSignInJWT({ isOpen, onModalCancel }) {
  // retrieve current state of redux store
  const authToken = useAppSelector(state => state.token.value)
  const { address } = useAccount() //  isConnected
  const { isWeb3AuthSuccess } = useAppSelector(state => state.auth)

  const [appMessage] = useState(
    `I am ${address} and I would like to create with Eden`,
  )

  const { data, isError, isSuccess, signMessage } = useSignMessage({
    message: appMessage,
  }) // isLoading, 

  return (
    'Sign-in Modal'
  )
}

{/* <Modal
      open={isOpen}
      mask
      maskClosable
      keyboard
      onCancel={onModalCancel}
      style={{
        width: '480px',
        background: 'white',
        border: '2px solid #000',
        borderRadius: '25px',
        padding: 0,
        overflow: 'hidden'
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
        style={{ paddingTop: 30, color: 'rgb(0 80 30)', textAlign: 'center', fontSize: '1rem' }}
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
        {'Eden uses this signature to verify that you’re the owner of this Ethereum address.'}
      </Title>

      <div>
        <Auth onModalCancel={onModalCancel} />
      </div>

      {isSuccess && <Text>Signature: {data}</Text>}

      {isWeb3AuthSuccess && (
        <Text
          style={{ wordBreak: 'break-word', color: 'black' }}
        >
          Auth Token: {authToken}
        </Text>
      )}
    </div>
  </Modal> */}
