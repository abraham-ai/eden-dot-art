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
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { IoIosShareAlt } from 'react-icons/io'

// STYLES
import styled from 'styled-components'

const CreationSocialsExtraStyles = styled.span`
  background: pink;
  border-radius: 25px;

  .cr-social {
    height: 40px;
    background: yellow;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .cr-social:first-child {
    margin-top: 0;
  }
  .cr-social .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const CreationSocialsExtra = () => {
  return (
    <CreationSocialsExtraStyles>
      <div className="cr-socials-main">
        <span className="cr-social like">
          <Button block className="btn" shape="round" type="default">
            <FaStar className="icon" />
            <Text className="text">303</Text>
          </Button>
        </span>

        <span className="cr-social remix">
          <Button className="btn" shape="round" type="default">
            <FaRetweet className="icon" />
            <Text className="text">310</Text>
          </Button>
        </span>

        {/* <span className='cr-social views'>
            <Button className='btn' shape='round' type='default'>
              <AiFillEye className='icon' />
              <Text className='text'>310</Text>
            </Button>
          </span> */}

        <span className="cr-social bookmark">
          <Button className="btn" shape="round" type="default">
            <BsFillBookmarkFill className="icon" />
            <Text className="text">Save</Text>
          </Button>
        </span>

        <span className="cr-social share">
          <Button className="btn" shape="round" type="default">
            <IoIosShareAlt className="icon" />
            <Text className="text">Share</Text>
          </Button>
        </span>
      </div>
    </CreationSocialsExtraStyles>
  )
}

const CreationSocialsStyles = styled.div`
  display: flex;
  align-items: center;
  // background: lime;
  justify-content: flex-end;

  .cr-socials-main {
    display: flex;
    // background: red;
    align-items: center;
    // height: 50px;
    // border: 2px solid black;
  }
  .cr-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ;
  }
  .cr-social .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cr-social .text {
    color: white;
  }
  .cr-social .icon {
    // color: white;
    height: 15px;
    // background: green;
  }
`

const CreationSocials = () => {
  return (
    <CreationSocialsStyles>
      <div className="cr-socials-main">
        {/* <span className='cr-social like'>
          <Button className='btn' shape='circle' type='default'>
            <FaStar className='icon' />
            <Text className='text'>303</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social remix'>
          <Button className='btn' shape='circle' type='default'>
            <FaRetweet className='icon' />
            <Text className='text'>310</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social views'>
          <Button className='btn' shape='circle' type='default'>
            <AiFillEye className='icon' />
            <Text className='text'>310</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social bookmark'>
          <Button className='btn' shape='circle' type='default'>
            <BsFillBookmarkFill className='icon' />
            <Text className='text'>Save</Text>
          </Button>
        </span> */}

        {/* <span className='cr-social share'>
          <Button className='btn' shape='circle' type='default'>
            <IoIosShareAlt className='icon' />
            <Text className='text'>Share</Text>
          </Button>
        </span> */}
      </div>

      <div className="cr-socials-extra">
        <Popover placement="topRight" content={<CreationSocialsExtra />}>
          <span className="cr-social share">
            <Button className="btn" shape="circle" type="default">
              <FiMoreHorizontal className="icon" />
            </Button>
          </span>
        </Popover>
      </div>
    </CreationSocialsStyles>
  )
}

const CardStyles = styled.section`
  // max-width: 345px;
  position: relative;
  box-shadow: unset !important;
  background: unset;
  border-radius: 10px;
  overflow: hidden;

  #creation-card {
  }
  #creation-card:hover {
    transform: unset;
    cursor: pointer;
    // cursor: zoom-in;
  }
  #creation-card:hover .creation-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    // padding-right: 50px;
    width: 100%;
    // background: yellow;
  }
  #creation-card:hover .creation-actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    // background: #111633;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
  }
  #creation-card {
    // background: yellow;
  }
  .creation-content {
    position: absolute;
    height: 100%;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    display: none;
    margin: 0;
    padding: 0;
  }
  .creation-actions {
    display: none;
  }
  .creation-header {
    display: inline-block;
    margin: 8px;
    padding: 8px;
  }
  .creation-header > div {
    flex: 0;
    float: left;
  }
  .creation-header:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: 25px;
    margin: 8px;
    padding: 8px;
    cursor: pointer;
    // backdrop-filter: blur(16px);
  }
  .close-icon-wrapper:hover {
    cursor: pointer;
    z-index: 50;
  }
`

export default function CreationCardMinimal({ index, creation }) {
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
    router.push('/garden', false, { scroll: false })
    event ? setModalOpen(false) : null
  }

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  return (
    <CardStyles>
      <article id="creation-card" key={index}>
        <Link
          href={`/garden?creationId=${creation.key}`}
          as={`/creation/${creation.key}`}
          scroll={false}
        >
          {/* onClick={handleModalOpen} */}
          <div style={{ position: 'relative' }}>
            <>
              <Image
                src={uri}
                height={512}
                width={512}
                alt={prompt}
                layout="responsive"
              />

              <article className="creation-content">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="cr-social like" style={{ margin: 10 }}>
                    <Button className="btn" shape="circle" type="default">
                      <FaStar className="icon" />
                    </Button>
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: 10,
                    }}
                  >
                    <span
                      className="cr-social remix"
                      style={{ marginBottom: 10 }}
                    >
                      <Button className="btn" shape="circle" type="default">
                        <FaRetweet className="icon" />
                      </Button>
                    </span>

                    <span className="cr-social bookmark">
                      <Button className="btn" shape="circle" type="default">
                        <BsFillBookmarkFill className="icon" />
                      </Button>
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: '15px',
                    margin: 10,
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(16px)',
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      overflowY: 'auto',
                      maxHeight: 150,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Text
                      className="prompt-command"
                      style={{
                        fontWeight: 'bold',
                        color: '#8C7CF0',
                        fontFamily: 'courier',
                      }}
                    >
                      {generator}
                    </Text>
                    <Text style={{ color: 'white' }}>{prompt}</Text>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}
                    >
                      <Popover content={'test'} placement="bottomLeft">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div
                            style={{
                              borderRadius: '50%',
                              overflow: 'hidden',
                              width: '32px',
                              height: '32px',
                              marginRight: 10,
                              background: 'orange',
                            }}
                          >
                            <Blockies seed={address} />
                          </div>
                          <Text style={{ color: 'white' }}>
                            {displayAddress}
                          </Text>
                        </div>
                      </Popover>
                      <CreationSocials />
                    </div>
                  </div>
                </div>

                <span>{key}</span>
                <span>{timestamp}</span>
                <span>{status}</span>
              </article>
            </>
          </div>
        </Link>
      </article>

      <Modal
        width="100%"
        bodyStyle={{ height: '100%' }}
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
    </CardStyles>
  )
}
