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
  const { 
    isSignedIn,
    setIsCreateUIModalOpen,
    setIsSignInModalOpen 
  } = useContext(AppContext);

  const handleCreateOpen = () => {
    if (isSignedIn) {
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
