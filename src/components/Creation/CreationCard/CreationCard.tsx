import React, { useState, useEffect } from 'react'

// NEXTJS
import Image from 'next/image'
import Link from 'next/link'

// ROUTER
// import { useRouter } from 'next/router'

import axios from 'axios'

// ANTD
import { Popover, Typography } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import CreationCardModal from '@/components/Creation/CreationCard/CreationCardModal/CreationCardModal'
import CreationSocials from '@/components/Creation/CreationCard/CreationSocials/CreationSocials'
import CreationSaveModal from '@/components/Creation/CreationCard/CreationSaveModal/CreationSaveModal'
// import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// UTILS
import time_ago from '@/util/time_ago'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import { FaRetweet } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'

// STYLES
import { CreationCardStyles } from './CreationCardStyles'
// import AppContext from '@/context/AppContext/AppContext'

// TYPES
import Creation from '@/interfaces/Creation'


import { useReactions } from '@/hooks/useReactions'

export default function CreationCard({ creation }: { creation: Creation }) {
  // const router = useRouter()

  const { uri, timestamp, prompt, status, generator, width, height, address } =
    creation;

  const {praises, burns, praised, burned } = useReactions(creation.key);

  const [isSaveModalActive, setIsSaveModalActive] = useState(false)

  // const context = useContext(AppContext)
  // const { setIsCreationModalOpen } = context

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

  // const handleModalClose = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  // ) => {
  //   // event.preventDefault()
  //   router.push('/garden', '', { scroll: false })
  //   event ? setIsCreationModalOpen(false) : null
  // }

  const handlePraise = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log("lets go 22")
    const resss  = await axios.post('/api/react', {
      creationId: creation.key,
      reaction: "🙌"
    });
    console.log(resss)
  }

  const handleBurn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log("lets go")
    const resss = await axios.post('/api/react', {
      creationId: creation.key,
      reaction: "🔥"
    });

    console.log(resss)
  }

  const handleRecreation = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    // console.log('handle RECREATION 🔀 !')
  }

  const handleSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    // console.log('handle SAVE 🔖!')
    setIsSaveModalActive(true)
  }

  let displayAddress = address?.substring(0, 6)
  displayAddress += '...' + address.slice(-4)

  return (
    <CreationCardStyles style={{ aspectRatio: `${width}/${height}` }}>
      <article id={`creation-card`}>
        <article className="creation-content">
          <div className="cr-action-left">
            <span className="cr-social praise">
              <button className="btn" onClick={handlePraise}>
                🙌 {praises} - {praised?"yes":"no"}
              </button>
            </span>
            <span className="cr-social burn">
              <button className="btn" onClick={handleBurn}>
                🔥 {burns}
              </button>
            </span>
          </div>

          <div className="cr-action-right">
            <span className="cr-social remix">
              <button className="btn" onClick={handleRecreation}>
                <FaRetweet className="icon" />
              </button>
            </span>

            <span className="cr-social bookmark">
              <button className="btn" onClick={handleSave}>
                <BsFillBookmarkFill className="icon" />
              </button>
            </span>
          </div>

          <div className="cr-content-main-wrapper">
            <div className="cr-content-main">
              <Text className="cr-date">{time_ago(timestamp)}</Text>
              {/* <Text className="cr-prompt-command">{generator}</Text> */}
              <Text className="cr-prompt-command">{creation.key}</Text>
              <Text className="cr-prompt">{prompt}</Text>

              <div className="cr-metadata">
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
          <div className="cr-image-wrapper">
            <Image src={uri} height={height} width={width} alt={prompt} />
          </div>
        </Link>
      </article>

      <CreationCardModal creation={creation} />
      <CreationSaveModal isSaveModalActive={isSaveModalActive} />
    </CreationCardStyles>
  )
}
