import React, { useState } from 'react'

// NEXTJS
import Image from 'next/image'
import Link from 'next/link'

// ROUTER
import { useRouter } from 'next/router'

// ANTD
import { Popover, Modal, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import CreationSocials '@/components/Creation/CreationSocials/CreationSocials'
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import { FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'

// STYLES
import CreationCardStyles from './CreationCardStyles'

export default function CreationCardModal({ index, creation }) {
  const router = useRouter()

  console.log({ creation })
  const { key, address, uri, timestamp, prompt, status, generator } = creation

  const [modalOpen, setModalOpen] = useState(false)

  // event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  // const handleModalOpen = () => {
  // event.preventDefault()
  // router.push(
  //   `/creation/[creationId]`,
  //   `/creation/${creation.id}`,
  //   { shallow: true }
  // )
  // setModalOpen(true)
  // }

  const handleModalClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // event.preventDefault()
    // console.log('handleCardClose!')
    // console.log(event)
    router.push('/garden', '', { scroll: false })
    event ? setModalOpen(false) : null
  }

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  return (
    <CreationCardStyles>
      <Modal
        className="cr-modal"
        style={{ height: '100%', width: '100%' }}
        open={
          creation.key === router.query.creationId
            ? !!router.query.creationId
            : false
        }
        centered
        keyboard
        onCancel={handleModalClose}
      >
        <>
          <Button
            className="close-icon-wrapper"
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              color: 'black',
            }}
            onClick={e => handleModalClose(e)}
          >
            {'X'}
          </Button>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <div
                className="creation-card-wrapper"
                style={{
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  className="creation-card"
                  src={uri}
                  alt="Card Media"
                  style={{
                    height: 'auto',
                    position: 'relative',
                    minHeight: '512px',
                    minWidth: '512px',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Popover
                      content={<ProfilePopOver profileAddress={address} />}
                      placement="bottomLeft"
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            width: '32px',
                            height: '32px',
                            marginRight: 10,
                          }}
                        >
                          <Blockies seed={address} />
                        </div>
                        <Text
                          style={{
                            // color: '#111',
                            fontWeight: 600,
                            fontSize: '.8rem',
                            color: 'white',
                          }}
                        >
                          {displayAddress}
                        </Text>
                      </div>
                    </Popover>
                  </div>

                  <Text
                    style={{
                      paddingTop: 20,
                      color: '#111',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                    }}
                  >
                    {prompt}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </CreationCardStyles>
  )
}
