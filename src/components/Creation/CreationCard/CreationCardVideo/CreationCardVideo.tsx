import React, { useState, useRef, useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ANTD
import { Skeleton, Typography } from 'antd'
const { Text } = Typography

// COMPONENTS
import ReactPlayer from 'react-player'
// import VideoImageThumbnail from 'react-video-thumbnail-image'

// ICONS
import { TbArrowBigDown, TbArrowBigTop } from 'react-icons/tb'
// import { HiSparkles } from 'react-icons/hi'
// import { AiFillFire } from 'react-icons/ai'
// SyncOutlined
// PlayCircleTwoTone
// MoreVertIcon
// IosShareIcon
// BookmarkBorderIcon

// STYLES
import { CreationCardVideoStyles } from './CreationCardVideoStyles'

// TYPES
import CreationVideo from '@/interfaces/Creation'

interface Creation {
  creation: CreationVideo
}

export default function CreationCardVideo({ creation }: Creation) {
  // REF
  const videoRef = useRef<HTMLVideoElement>()

  // interaction stats
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const context = useContext(AppContext)
  const { setIsCreationModalOpen } = context

  const handleMouseOver = () => {
    // console.log('setIsPlaying TRUE')
    setIsHovering(true)
    setIsPlaying(true)

    videoRef?.current?.play()
  }

  const handleMouseOut = () => {
    // console.log('setIsPlaying FALSE')
    setIsHovering(false)
    setIsPlaying(false)
    videoRef?.current?.pause()
  }

  const handleCardOpen = () => setIsCreationModalOpen(true)
  // const handleCardClose = () => setCardOpen(false)

  const { uri, address, prompt } = creation

  // const videoImageThumbnail = (
  //   <VideoImageThumbnail
  //     videoUrl="uri"
  //     thumbnailHandler={thumbnail => console.log(thumbnail)}
  //     width={120}
  //     height={80}
  //     alt={`${prompt}`}
  //   />
  // )

  return (
    <CreationCardVideoStyles>
      <article className="cr-card">
        <div
          className={isHovering ? 'hover cr-img-wrapper' : 'cr-img-wrapper'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ height: 256 }}
        >
          <div className="cr-video">
            <video
              preload="auto"
              poster={''}
              loop={true}
              muted={true}
              ref={videoRef}
            >
              <source src={uri} type="video/mp4" />
            </video>
          </div>
        </div>
        <Text>{address}</Text>
      </article>

      <div
      // aria-labelledby="transition-modal-title"
      // aria-describedby="transition-modal-description"
      // open={cardOpen}
      // onClose={handleCardClose}
      >
        <div className="cr-react-player-wrapper">
          <ReactPlayer
            url={uri}
            loop={true}
            playIcon={<span>{'Play'}</span>}
            playing={isPlaying}
            muted={true}
            light={'Light'}
            onClickPreview={() => {
              handleCardOpen()
              setIsPlaying(true)
            }}
            width="100%"
            height="100%"
            fallback={<Skeleton />}
          />

          <div className="creation-content">
            <div className="cr-prompt-wrapper">
              <div className="cr-prompt-inner-wrapper">
                <Text className="cr-prompt">{prompt}</Text>
              </div>
            </div>

            <div className="cr-actions">
              <div className="cr-actions-inner">
                <button aria-label="praise" className="arrow-up">
                  <TbArrowBigDown className="cr-icon" />
                </button>
                <button aria-label="burn" className="arrow-down">
                  <TbArrowBigTop className="cr-icon" />
                </button>
              </div>

              <button className="cr-icon cr-share" aria-label="share">
                <span>{'Share'}</span>
              </button>

              <div className="cr-action-buttons">
                <button aria-label="bookmark">
                  <span>{'Share'}</span>
                </button>
                <button aria-label="settings">
                  <span>{'More'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CreationCardVideoStyles>
  )
}
