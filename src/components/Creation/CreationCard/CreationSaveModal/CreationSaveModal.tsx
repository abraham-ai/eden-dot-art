import React, { useState, useEffect } from 'react'

// ANTD
import { Modal, Input, Button } from 'antd'

// STYLES
import { CreationSaveModalStyles } from './CreationSaveModalStyles'

export default function CreationSaveModal({ isSaveModalActive }) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)

  useEffect(() => {
    if (isSaveModalActive) {
      setIsSaveModalOpen(isSaveModalActive)
    }
  }, [isSaveModalActive])

  return (
    <CreationSaveModalStyles>
      <Modal
        className="cr-save-modal"
        title="Collections"
        open={isSaveModalOpen}
        onOk={() => setIsSaveModalOpen(false)}
        onCancel={() => setIsSaveModalOpen(false)}
      >
        <ul>
          <Button>Collection 1</Button>
          <Button>Collection 2</Button>
          <Button>Collection 3</Button>
        </ul>
        <div>
          <Button>Create Board</Button>
        </div>
        <div>
          <Input />
        </div>
      </Modal>
    </CreationSaveModalStyles>
  )
}
