import React, { useState, useRef } from 'react'

// ANTD
import { Button, Skeleton, Typography, CardContent, CardActions } from 'antd'
const { Text } = Typography

// UTILS
import shaURL from '@/util/shaURL'

// COMPONENTS
import ReactPlayer from 'react-player'

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
import CreationCardVideoStyles from './CreationCardVideoStyles'

export default function VideoCreation({
  item = {
    _id: '634b05ae2e7cdbe5f5348a70',
    date: '2022-10-15T19:10:38.356Z',
    address: '0x0000000000000000000000000000000000000000',
    text_input:
      'Portrait of a couple of dolphin in a whimsical land with a splashing waterfall, coloring book style, hyper-detailed painting, beautiful elegant digital illustration, scenic, gold outline, hyper-realistic, glowing stars, paisley pattern, fluorescent neon, glowwave, wide-angle lens',
    config: {
      mode: 'interpolate',
      text_input:
        'Portrait of a couple of dolphin in a whimsical land with a splashing waterfall, coloring book style, hyper-detailed painting, beautiful elegant digital illustration, scenic, gold outline, hyper-realistic, glowing stars, paisley pattern, fluorescent neon, glowwave, wide-angle lens',
      input_image: '',
      mask_image: '',
      width: 512,
      height: 512,
      n_samples: 1,
      interpolation_texts: [
        'Portrait of a couple of dolphin in a whimsical land with a splashing waterfall, coloring book style, hyper-detailed painting, beautiful elegant digital illustration, scenic, gold outline, hyper-realistic, glowing stars, paisley pattern, fluorescent neon, glowwave, wide-angle lens',
        'Portrait of an Elephant in a Whimsical Land, Coloring Book Style, Hyper Detailed Painting, Beautiful Elegant Digital Illustration, Scenic, Golden Outline, Hyper Realistic, Shining Stars, Paisley Pattern, Fluorescent Neon, Glowwave, Wide Angle Lens',
      ],
      n_interpolate: 12,
      combined_text_inputs: [],
      combined_text_ratios: [],
      n_iter: 1,
      scale: 12.5,
      ddim_steps: 25,
      plms: false,
      C: 4,
      f: 8,
      seed: 59378332,
      fixed_code: true,
      username: '0x0000000000000000000000000000000000000000',
    },
    token: null,
    status: 'complete',
    stats: {
      praise_count: 0,
      burn_count: 0,
      praised_by_me: false,
      burned_by_me: false,
    },
    generator: {
      name: 'stable-diffusion',
      commit: '5d29a11d5b9ca2da4941d5ed45a755e41154335e',
    },
    source: {
      origin: 'discord',
      author: 353209133878607900,
      author_name: 'Miguelangelo#9265',
      guild: 573691888050241540,
      guild_name: 'Eden',
      channel: 1003581679916548200,
      channel_name: '🤖-eden-bot',
    },
    status_code: 100,
    intermediate_sha: [
      '80e5d286db76fabebadeb78a2aac20c7307ddac10b07f0a01bfe0264417f7c42',
      'd379ca80157b5a0a0e5b8c33a3ce9933e7dbac9566ec1c0cdb3a288678dbf9a3',
      '7133a1e520dd1e150c09b9095fb3efee43756a878eeecfbcd9d7332aa86079fe',
      'ee6747ac30fcba3168aa218b60e6ea23497ce4738820af0d9d962e5ffda03b4c',
      'a52e20d24a5fbfbfdaa045a95aff218f001d23ad83006f3ea2a651369b36f072',
      '44ff30cd7af0610e4d6a565f0589bcbf47eda76cff8e167765e4d8197acbb7a5',
      '8635c7c3e1e184ebed8a34ebd5d152a0fcb18b295cdcef651f11bdf630998e6b',
      'e21013e92bcf0ab8df4d17a13025c3a0e1b78d918795e51392d9de230fb9bbad',
      'e8763f8046217eb17106a3db1613b6ebd155c152fecd1a7da7f0f7819230bd61',
      '94fecabe4f7433990e1dbb494f477ce121ae7d00a4f4b547e1ed51940ee42f5b',
      'ff6c90ec0d0680b6258e453e1b6b0414cf2feb793642552f5f36b004e108e7c1',
    ],
    sha: 'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
    video_sha:
      'a0812a502beb388082dfdd0004a5f8c2ba9ef61349f82c78c11c610049cdf067',
  },
}) {
  // REF
  const videoRef = useRef<HTMLVideoElement>()

  // interaction stats
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  // const [duration, setDuration] = useState(0)
  const [username, setUsername] = useState('')
  // const [visible, setVisible] = useState(false)

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

  const [cardOpen, setCardOpen] = useState(false)
  const handleCardOpen = () => setCardOpen(true)
  const handleCardClose = () => setCardOpen(false)

  const { text_input, source } = item

  if (source.origin === 'discord' && username === '') {
    setUsername(source.author_name)
  }

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
              poster={shaURL(item)}
              loop={true}
              muted={true}
              ref={videoRef}
            >
              <source src={shaURL(item)} type="video/mp4" />
            </video>
          </div>
        </div>
        <Text>{username}</Text>
      </article>

      <div
      // aria-labelledby="transition-modal-title"
      // aria-describedby="transition-modal-description"
      // open={cardOpen}
      // onClose={handleCardClose}
      >
        <div className="cr-react-player-wrapper">
          <ReactPlayer
            url={shaURL(item)}
            loop={true}
            playIcon={'Play'}
            playing={isPlaying}
            muted={true}
            light={'Light'}
            onClickPreview={() => {
              handleCardOpen()
              setIsPlaying(true)
            }}
            width="100%"
            height="100%"
            fallback={
              <Skeleton variant="rectangular" width={256} height={256} />
            }
          />

          <CardContent className="creation-content">
            <div className="cr-prompt-wrapper">
              <div className="cr-prompt-inner-wrapper">
                <Text className="cr-prompt">{text_input}</Text>
              </div>
            </div>

            <CardActions className="cr-actions" disableSpacing>
              <div className="cr-actions-inner">
                <Button
                  aria-label="praise"
                  className="arrow-up"
                  icon={<TbArrowBigDown className="cr-icon" />}
                />
                <Button
                  aria-label="burn"
                  className="arrow-down"
                  icon={<TbArrowBigTop className="cr-icon" />}
                />
              </div>

              <Button
                className="cr-icon cr-share"
                aria-label="share"
                icon={'Share'}
              />

              <div className="cr-action-buttons">
                <Button aria-label="bookmark" icon={<div>{'Share'}</div>} />
                <Button aria-label="settings" icon={<div>{'More'}</div>} />
              </div>
            </CardActions>
          </CardContent>
        </div>
      </div>
    </CreationCardVideoStyles>
  )
}
