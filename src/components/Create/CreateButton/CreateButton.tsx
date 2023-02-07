'use client'

import React, { useContext } from 'react'

// ANTD
import { Button, Typography } from 'antd'
const { Text } = Typography

// STYLES
import styled from 'styled-components'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext';


const CreateButtonStyles = styled.section`
	#create-button {
		display: flex;
		align-items: center;
		height: 45px;
		margin-left: 15px;
		padding: 10px 20px;
		color: white;
		background: #8C7CF0;
		border-radius: 30px;
	}
`

export default function CreateButton() {

  const context = useContext(AppContext)
  const { setIsModalVisible } = context

  const handleCreateOpen = () => {
    console.log('set modal visible!')
    setIsModalVisible(true)
  }

  return (
    <CreateButtonStyles id='create-button-wrapper'>
      <Button
        id='create-button'
        onClick={handleCreateOpen}
        size='middle'
        icon={'+'}
      >
        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem', marginLeft: 10 }}>
          Create
        </Text>
      </Button>
    </CreateButtonStyles>        
  )
}