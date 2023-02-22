import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ANTD
import { Modal, Button } from 'antd'

// ACCOUNT
import Blockies from 'react-blockies'

// WAGMI
import { useAccount } from 'wagmi'

// COMPONENTS
import EdenTabs from '@/components/Create/CreateUI/EdenTabs/EdenTabs'

// STYLES
import CreateUIStyles from './CreateUIStyles'

export default function CreateUI() {
  const context = useContext(AppContext)
  const { isCreateUIModalOpen, setIsCreateUIModalOpen } = context

  const { address } = useAccount()

  return isCreateUIModalOpen ? (
    <CreateUIStyles>
      <Modal
        className="create-modal"
        open={isCreateUIModalOpen}
        onCancel={() => setIsCreateUIModalOpen(false)}
        bodyStyle={{ maxWidth: '90%', maxHeight: '90%' }}
        width="90%"
      >
        <CreateUIStyles>
          <>
            <div className="close-icon-wrapper">
              <Button
                className="close-icon"
                onClick={() => setIsCreateUIModalOpen(false)}
              />
            </div>

            <div className="create-modal-form-wrapper">
              <div key="form-outer-wrapper" className="form-wrapper">
                <div className="form-wrapper">
                  <div className="form-inner-wrapper">
                    <div className="account-wrapper">
                      <Blockies seed={address} scale={6} />
                    </div>

                    <div className="form-tabs-wrapper">
                      <EdenTabs />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </CreateUIStyles>
      </Modal>
    </CreateUIStyles>
  ) : null
}
