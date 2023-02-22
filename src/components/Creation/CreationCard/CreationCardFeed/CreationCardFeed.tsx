import React, { useState } from 'react'

// STYLES
import styled from 'styled-components'

// ANTD
import { Typography, Modal, Popover } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
// import CloseIcon
import { StarOutlined, ShareAltOutlined, EyeOutlined } from '@ant-design/icons'

// STYLES
import { CreationCardFeed as CreationCardFeedStyles } from './CreationCardFeed'

export default function CreationCardFeed({ creation }) {
  // MAIN
  const text_input =
    creation.text_input === undefined ? 'none' : creation.text_input
  const intermediate_sha =
    creation.intermediate_sha === undefined ? [] : creation.intermediate_sha

  const { address } = creation.source

  // GENERATOR
  creation.generator === undefined ? 'none' : creation.generator

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)

  const handleModalClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event ? setModalOpen(false) : null
  }

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

  const imageFullURL =
    creation.intermediate_sha === undefined
      ? 'none'
      : PRD_URL + intermediate_sha[intermediate_sha.length - 1]

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  return (
    <CreationCardFeedStyles>
      <div id="cr-card-wrapper" onClick={handleModalOpen}>
        <div className="cr-card">
          <article className="cr-card-creator-wrapper">
            <div className="cr-card-creator">
              <span className="cr-blockies">
                <Blockies seed={address} />
              </span>
              <Text>{displayAddress}</Text>
            </div>
            <button>Follow</button>
          </article>

          <div
            style={{
              border: '4px solid hotpink',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            <span
              style={{
                maxWidth: 400,
                background: 'orange',
                position: 'relative',
              }}
            >
              <img
                src={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
                height={512}
                width={512}
                alt="Eden Creation"
                style={{
                  position: 'relative',
                  maxWidth: '400px',
                  height: 'auto',
                }}
              />

              <article className="creation-content">
                <div
                  style={{
                    borderRadius: '15px',
                    margin: 10,
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(16px)',
                    padding: 20,
                  }}
                >
                  <div style={{ overflowY: 'auto', maxHeight: 150 }}>
                    <span style={{ display: 'flex' }}>
                      <Text
                        className="prompt-command"
                        style={{
                          fontWeight: 'bold',
                          fontFamily: 'courier',
                          color: '#8C7CF0',
                        }}
                      >
                        {'/create'}
                      </Text>
                      <Text>{'2 days ago'}</Text>
                    </span>

                    <Text style={{ color: 'gray' }}>{text_input}</Text>

                    <Popover
                      content={<ProfilePopOver profileAddress={address} />}
                      placement="bottomLeft"
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: 10,
                        }}
                      >
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
                        <Text>{displayAddress}</Text>
                      </div>
                    </Popover>
                  </div>
                </div>
              </article>
            </span>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'cyan',
              }}
            >
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBottom: 10,
                }}
              >
                <button>
                  <StarOutlined />
                </button>
                <Text>43.6k</Text>
              </li>
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBottom: 10,
                }}
              >
                <button shape="circle">
                  <EyeOutlined />
                </button>
                <Text>295</Text>
              </li>
              <li
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <button shape="circle">
                  <ShareAltOutlined />
                </button>
                <Text>108</Text>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        mask
        maskClosable
        onCancel={() => handleModalClose}
      >
        <>
          <div className="close-icon-wrapper" onClick={handleModalClose}>
            {'Close'}
          </div>

          <div>
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
                  flexDirection: 'column',
                }}
              >
                <img
                  className="creation-card"
                  src={imageFullURL}
                  alt="Card Media"
                  style={{
                    height: 'auto',
                    position: 'relative',
                    minHeight: '512px',
                    minWidth: '512px',
                    maxHeight: '612px',
                    maxWidth: '612px',
                    paddingBottom: 20,
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: 'yellow',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Popover
                      content={<ProfilePopOver profileAddress={address} />}
                      placement="bottomLeft"
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: 10,
                        }}
                      >
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
                            color: '#111',
                            fontWeight: 600,
                            fontSize: '.8rem',
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
                    {text_input}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </CreationCardFeedStyles>
  )
}
