'use client'

import React, { useContext } from 'react'

// ANTD
import { Typography } from 'antd'
const { Text } = Typography

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// STYLES
import { CreateButtonStyles } from './CreateButtonStyles'

export default function CreateButton() {
  const context = useContext(AppContext)
  const {
    setIsCreateUIModalVisible,
    setIsSignInModalVisible,
    isWeb3AuthSuccess,
  } = context

  const handleCreateOpen = (e: MouseEvent) => {
    if (isWeb3AuthSuccess === true) {
      setIsCreateUIModalVisible(true)
    } else {
      setIsSignInModalVisible(true)
    }
  }

  return (
    <CreateButtonStyles id="create-button-wrapper">
      <button
        id="create-button"
        onClick={e => handleCreateOpen(e)}
        size="middle"
        icon={'+'}
      >
        <Text className="create-button-text">Create</Text>
      </button>
    </CreateButtonStyles>
  )
}
