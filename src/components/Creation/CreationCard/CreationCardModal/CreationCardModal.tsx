import React, { useState, useContext } from 'react'

// NEXTJS
import Image from 'next/image'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ROUTER
import { useRouter } from 'next/router'

// UTILS
import TimeAgo from '@/util/time_ago'

// ANTD
import {
  Tooltip,
  Popover,
  Modal,
  Typography,
  Button,
  Input,
  Tag,
  Row,
} from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import CreationSocials from '@/components/Creation/CreationCard/CreationSocials/CreationSocial/CreationSocial'
import ProfilePopOver from '@/components/Account/Profile/ProfilePopOver/ProfilePopOver'
import Blockies from 'react-blockies'

// ICONS
import { CloseOutlined, CodeOutlined } from '@ant-design/icons'
import { HiOutlineArrowNarrowUp, HiOutlineFingerPrint } from 'react-icons/hi' // HiCommandLine
import { MdOutlineDateRange } from 'react-icons/md'
import { BsAspectRatio } from 'react-icons/bs'
import { SlSizeFullscreen } from 'react-icons/sl'
// import { FaRetweet } from 'react-icons/fa'
// BsFillBookmarkFill,
// import { BsFillBookmarkFill } from 'react-icons/bs'

// TYPES
import CreationModal from '@/interfaces/CreationModal'

// CONST
const PRD_URL = 'https://eden.art'

export default function CreationCardModal({ creation }: CreationModal) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [tooltipText, setTooltipText] = useState('copy link')
  const router = useRouter()

  const context = useContext(AppContext)
  const { setIsCreationModalOpen } = context

  // console.log({ creation })
  const {
    key,
    address,
    uri,
    timestamp,
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
      width={'90vw'}
      footer={null}
    >
      <>
        <div className="cr-modal-wrapper">
          <div className="cr-modal-inner-wrapper">
            <Button
              shape={'circle'}
              className="close-icon-wrapper"
              style={{ position: 'absolute', margin: '10px', zIndex: 1000 }}
              onClick={e => handleModalClose(e)}
              icon={<CloseOutlined color={'white'} />}
            />
            <div className="cr-card-image-wrapper">
              <Image
                className="cr-card-image"
                src={uri}
                alt={prompt}
                width={width}
                height={height}
                placeholder={'blur'}
                blurDataURL={uri}
                style={{ width: '100%', height: 'auto' }}
              />

              <Image
                className="cr-card-bg"
                src={uri}
                alt={prompt}
                width={width}
                height={height}
                placeholder={'blur'}
                blurDataURL={uri}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="cr-card-content-wrapper">
              <div className="cr-card-content-inner">
                <div className="cr-creator-wrapper">
                  <div className="cr-card-popover-wrapper">
                    <Popover
                      content={<ProfilePopOver profileAddress={address} />}
                      placement="bottomLeft"
                    >
                      <div className="cr-creator-info">
                        <div className="cr-blockie">
                          <Blockies seed={address} />
                        </div>
                        <span className="cr-data">
                          <Text className="cr-address">{displayAddress}</Text>
                          <Text className="cr-date">{TimeAgo(timestamp)}</Text>
                        </span>
                      </div>
                    </Popover>
                  </div>
                  <Button
                    type={isFollowing ? 'primary' : 'default'}
                    shape="round"
                    size="large"
                    style={{
                      background: isFollowing ? 'white' : '#8C7CF0',
                      color: isFollowing ? '#8C7CF0' : 'white',
                    }}
                    onClick={() => {
                      setIsFollowing(!isFollowing)
                    }}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </div>
                <div className="cr-prompt-wrapper">
                  <Text className="cr-prompt-command">{'/create'}</Text>
                  <Text className="cr-prompt">{prompt}</Text>
                </div>

                <div className="cr-img-metadata" style={{ paddingTop: 20 }}>
                  <Row className="cr-properties-wrapper">
                    <Tag className="cr-property">
                      <span className="cr-property-type">
                        <MdOutlineDateRange className="icon" />
                        <Text>Date</Text>
                      </span>
                      <Text>{TimeAgo(timestamp)}</Text>
                    </Tag>
                    <Tag className="cr-property">
                      <span className="cr-property-type">
                        <SlSizeFullscreen className="icon" />
                        <Text>Size</Text>
                      </span>
                      <Text>{'512 x 512'}</Text>
                    </Tag>
                    <Tag className="cr-property">
                      <span className="cr-property-type">
                        <CodeOutlined className="icon" />
                        <Text>Command</Text>
                      </span>
                      <Text>/dream</Text>
                    </Tag>
                    <Tag className="cr-property">
                      <span className="cr-property-type">
                        <BsAspectRatio className="icon" />
                        <Text>Shape</Text>
                      </span>
                      <Text>square</Text>
                    </Tag>
                  </Row>
                </div>
                <div
                  className="cr-socials-wrapper"
                  style={{ padding: '20px 0 20px 0px', display: 'flex' }}
                >
                  <CreationSocials layout={'expanded'} />
                </div>
                <Input.Group
                  className="cr-share-wrapper"
                  style={{ width: '100%' }}
                >
                  <Input
                    style={{
                      display: 'flex',
                      flex: 1,
                      cursor: 'text',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 15,
                      borderBottomLeftRadius: 15,
                    }}
                    defaultValue={`${PRD_URL}/creation/${key}`}
                    disabled
                  />
                  <Tooltip
                    placement="top"
                    title={tooltipText}
                    arrow={{ arrowPointAtCenter: true }}
                  >
                    <Button
                      type="default"
                      onClick={() => setTooltipText('link copied!')}
                      style={{
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      Copy Link
                    </Button>
                  </Tooltip>
                </Input.Group>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  )
}
