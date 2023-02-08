import React, { useState, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// ANTD
import { Form, Modal, Button, Snackbar } from 'antd'

// ACCOUNT
import Blockies from 'react-blockies'

// WAGMI
import { useAccount } from 'wagmi'

// COMPONENTS
import EdenTabs from '@/components/Create/CreateUI/EdenTabs/EdenTabs'

// STYLES
import styled from 'styled-components'

const CreateUIStyles = styled.section`
  background: red;

  .filter-select > div {
    display: flex;
    align-items: center;
  }

  label {
    color: #536471;
    font-size: 1.2rem;
    margin-top: 18px;
  }

  .divider {
    border: 1px solid lightgray;
    margin-bottom: 10px;
    margin-top: -2px;
  }

  .create-icon {
    color: #8c7cf0;
    font-size: 1.3rem;
    margin: 0 8px 0 0;
  }

  .close-icon-wrapper:hover {
    cursor: pointer;
    z-index: 50;
  }

  .close-icon {
    color: white;
  }

  .close-icon:hover {
    cursor: pointer;
  }

  .x-button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .x-button {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    min-width: 50px;
  }

  .account-wrapper {
    margin-right: 10px;
  }

  .form-inner-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  #create-text-area {
    min-height: 100px;
    border: none;
    color: black;
    font-size: 1.2rem;
    margin-top: 30px;
    font-weight: 500;
  }
`

export default function CreateUI() {
  const context = useContext(AppContext)
  const {
    authToken,
    isModalVisible,
    setIsModalVisible,
    isWeb3WalletConnected,
    isWeb3AuthSuccess,
  } = context

  const { address } = useAccount()

  console.log({ isModalVisible })
  console.log({ authToken })
  console.log({ isWeb3WalletConnected, isWeb3AuthSuccess })

  return isModalVisible ? (
    <Modal
      className="create-modal"
      open={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      style={{ background: 'rgba(0, 0, 0, 0.65)' }}
    >
      <CreateUIStyles>
        <>
          <div
            className="close-icon-wrapper"
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              color: 'black',
            }}
          >
            <Button
              className="close-icon"
              onClick={() => setIsModalVisible(false)}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '90%',
              maxWidth: '90%',
              maxHeight: '90%',
              background: 'white',
              border: '2px solid #000',
              padding: '10px',
              borderRadius: '20px',
            }}
          >
            <div
              key="form-wrapper"
              className="form-wrapper"
              style={{ display: 'flex', flex: 1, height: '100%' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  overflow: 'scroll',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <div
                    className="account-wrapper"
                    style={{
                      borderRadius: '50%',
                      overflow: 'hidden',
                      minHeight: '48px',
                      minWidth: '48px',
                      maxHeight: '48px',
                      maxWidth: '48px',
                      margin: '25px 0 0 10px',
                    }}
                  >
                    <Blockies seed={address} scale={6} />
                  </div>

                  <div className="form-inner-wrapper">
                    <EdenTabs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </CreateUIStyles>
    </Modal>
  ) : null
}
