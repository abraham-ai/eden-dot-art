import React, { useContext } from 'react'

// NEXTJS
import Image from 'next/image'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ROUTER
import { useRouter } from 'next/router'

// ANTD
import { Popover, Modal, Typography } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import CreationSocials from '@/components/Creation/CreationCard/CreationSocials/CreationSocials'
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
// import { FaRetweet } from 'react-icons/fa'
// import { BsFillBookmarkFill } from 'react-icons/bs'

// STYLES
import { CreationCardModalStyles } from './CreationCardModalStyles'

// TYPES
import CreationModal from '@/interfaces/CreationModal'

export default function CreationCardModal({ creation }: CreationModal) {
  const router = useRouter()

  const context = useContext(AppContext)
  const { setIsCreationModalOpen } = context

  // console.log({ creation })
  const {
    // key,
    address,
    uri,
    // timestamp,
    prompt,
    // status,
    // generator,
    width,
    height,
  } = creation

  // event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  // const handleModalOpen = () => {
  // event.preventDefault()
  // router.push(
  //   `/creation/[creationId]`,
  //   `/creation/${creation.id}`,
  //   { shallow: true }
  // )
  // setIsCreationModalOpen(true)
  // }

  const handleModalClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // event.preventDefault()
    // console.log('handleCardClose!')
    // console.log(event)
    router.push('/garden', '', { scroll: false })
    event ? setIsCreationModalOpen(false) : null
  }

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  return (
    <CreationCardModalStyles>
      <Modal
        className="cr-modal-outer-wrapper"
        open={
          creation.key === router.query.creationId
            ? !!router.query.creationId
            : false
        }
        centered
        keyboard
        onCancel={handleModalClose}
        footer={null}
      >
        <>
          {/* <Button
            className="close-icon-wrapper"
            onClick={e => handleModalClose(e)}
          >
            {'Xhello'}
          </Button> */}

          <div className="cr-modal-wrapper">
            <div className="cr-modal-inner-wrapper">
              <div className="cr-card-image">
                <Image
                  className="cr-card"
                  src={uri}
                  alt={prompt}
                  width={width}
                  height={height}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              <div className="cr-card-content-wrapper">
                <div className="cr-card-content-inner">
                  <div className="cr-card-popover-wrapper">
                    <Popover
                      content={<ProfilePopOver profileAddress={address} />}
                      placement="bottomLeft"
                    >
                      <div className="cr-creator-wrapper">
                        <div className="cr-blockie">
                          <Blockies seed={address} />
                        </div>
                        <Text className="cr-address">{displayAddress}</Text>
                      </div>
                    </Popover>
                  </div>

                  <Text className="cr-prompt">{prompt}</Text>
                </div>
              </div>
            </div>

            <CreationSocials />
          </div>
        </>
      </Modal>
    </CreationCardModalStyles>
  )
}
