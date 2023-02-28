'use client'

import React, { useContext } from 'react'

// ANTD
import { Typography, Button } from 'antd'
const { Text } = Typography

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// STYLES
import { CreateButtonStyles } from './CreateButtonStyles'

// ICONS

export default function CreateButton() {
  const context = useContext(AppContext)
  const { setIsCreateUIModalOpen, setIsSignInModalOpen, isWeb3AuthSuccess } =
    context

  const handleCreateOpen = () => {
    if (isWeb3AuthSuccess === true) {
      setIsCreateUIModalOpen(true)
    } else {
      setIsSignInModalOpen(true)
    }
  }

  return (
    <CreateButtonStyles id="create-button-wrapper">
      <Button id="create-button" onClick={handleCreateOpen}>
        <Text className="create-button-text">{'Create'}</Text>
      </Button>
    </CreateButtonStyles>
  )
}
