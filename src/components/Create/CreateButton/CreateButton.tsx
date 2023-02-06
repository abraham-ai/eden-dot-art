import React from 'react'

// REDUX
import { setModalVisible } from '@/redux/slices/modalSlice'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks' // useSignMessage


// ANTD
import { Button, Typography } from 'antd'
const { Text } = Typography

// STYLES
import styled from 'styled-components'

// ICONS
// import AddIcon

const CreateButtonStyles = styled.div`
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

		// inti redux fetchers/getters
		const dispatch = useAppDispatch();

    const handleCreateOpen = () => {
			// console.log('HANDLE-CREATE OPEN!')
			dispatch(setModalVisible(true))
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