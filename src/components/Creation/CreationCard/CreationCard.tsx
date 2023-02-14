import React, { useState } from 'react'

// NEXTJS
import Image from 'next/image'
import Link from 'next/link'

// ROUTER
import { useRouter } from 'next/router'

// ANTD
import { Popover, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import CreationCardModal from '@/components/Creation/CreationCard/CreationCardModal/CreationCardModal'
import CreationSocials from '@/components/Creation/CreationCard/CreationSocials/CreationSocials'
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import { FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'

// STYLES
import CreationCardStyles from './CreationCardStyles'

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
    router.push('/garden', '', { scroll: false })
    event ? setModalOpen(false) : null
  }

  const handlePraise = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log('handle PRAISE 🙌 !')
  }

  const handleBurn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log('handle BURN 🔥 !')
  }

  const handleRecreation = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log('handle RECREATION 🔀 !')
  }

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log('handle SAVE 🔖!')
  }

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  return (
    <CreationCardStyles>
      <article id="creation-card" key={index}>
        <article className="creation-content">
          <div className="cr-action-left">
            <span className="cr-social praise">
              <Button
                className="btn"
                shape="circle"
                type="default"
                onClick={handlePraise}
              >
                🙌
              </Button>
            </span>
            <span className="cr-social burn">
              <Button
                className="btn"
                shape="circle"
                type="default"
                onClick={handleBurn}
              >
                🔥
              </Button>
            </span>
          </div>

          <div className="cr-action-right">
            <span className="cr-social remix">
              <Button
                className="btn"
                shape="circle"
                type="default"
                onClick={handleRecreation}
              >
                <FaRetweet className="icon" />
              </Button>
            </span>

            <span className="cr-social bookmark">
              <Button
                className="btn"
                shape="circle"
                type="default"
                onClick={handleSave}
              >
                <BsFillBookmarkFill className="icon" />
              </Button>
            </span>
          </div>

          <div className="cr-content-main-wrapper">
            <div className="cr-content-main">
              <Text>{timestamp}</Text>
              <Text className="cr-prompt-command">{generator}</Text>
              <Text className="cr-prompt">{prompt}</Text>

              <div>
                <Text>{key}</Text>
                <Text>{status}</Text>
              </div>

              <div className="cr-social-wrapper">
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
                    <Text style={{ color: 'white' }}>{displayAddress}</Text>
                  </div>
                </Popover>
                <CreationSocials />
              </div>
            </div>
          </div>
        </article>

        <Link
          className="cr-link"
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
            </>
          </div>
        </Link>
      </article>

      <CreationCardModal index={index} creation={creation} />
    </CreationCardStyles>
  )
}
