import React, { useState, useRef } from 'react'

// ANTD
import {
  Button,
  Skeleton,
  Typography,
  Backdrop,
  CardContent,
  CardActions,
} from 'antd'
const { Text } = Typography

// COMPONENTS
import ReactPlayer from 'react-player'

// ICONS
import { TbArrowBigDown, TbArrowBigTop } from 'react-icons/tb'
// SyncOutlined,
// PlayCircleTwoTone
// import { HiSparkles } from 'react-icons/hi'
// import { AiFillFire } from 'react-icons/ai'
// import MoreVertIcon
// import IosShareIcon
// import BookmarkBorderIcon

// STYLES
import styled from 'styled-components'
import shaURL from '@/util/shaURL'

const VideoCreationStyles = styled.article`
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  .cr-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto !important;
    min-width: 100%;
    min-height: 198px;
    /* min-height: 450px; */
    position: relative;
    transition: 300ms;
    border-radius: 16px;
    overflow: hidden;
    /* margin: 0 0 30px; */
    /* border: 1px solid #dbdbdb; */
    /* background: white; */
  }
  .cr-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important;
    cursor: pointer;
  }
  .cr-card .ant-card-body {
    padding: 0;
  }
  .cr-main-link {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
  }
  .ant-image-preview-operations > li:nth-child(4) {
    display: none !important;
  }
  .ant-image-preview-operations > li:nth-child(5) {
    display: none !important;
  }
  .cr-main-row {
    display: flex;
  }
  .cr-img-wrapper {
    /* height: 0; */
    min-width: 100%;
    height: 256px;
    /* padding-bottom: 100%; */
    /* min-height: 240px; */
    position: relative;
  }
  .cr-img-wrapper > span {
    display: block;
    top: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
  .cr-img-wrapper.hover .overlay-wrapper {
    /* background: #0000002d; */
    background-color: #00112d6b !important;
    /* #005effa8 */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .cr-img-wrapper .overlay-wrapper {
    position: absolute;
    top: 0;
    z-index: 90;
    display: none;
  }
  .overlay-buttons {
    display: none;
    flex: 0;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    position: absolute;
    bottom: 0;
    z-index: 95;
    width: 100%;
  }
  .cr-img-wrapper.hover .overlay-buttons {
    display: flex;
  }
  .overlay-buttons .ant-btn.children {
    margin: 0 10px 0 0;
  }
  .overlay-buttons .buynow,
  .overlay-buttons .recreate {
  }
  .ant-image {
    z-index: 10;
    width: 100%;
  }
  .ant-image:hover {
    transition: ease-in-out;
  }
  .ant-image:hover {
    /* background-color: rgba(0, 0, 0, 0.03) !important; */
    background-color: #005effa8 !important;
    /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%) !important; */
  }
  .ant-image-mask:hover {
    opacity: 0.25;
  }
  .cr-status {
    display: flex;
    flex: 1;
  }
  .cr-text {
    font-size: 1.65em;
    text-align: start;
    line-height: 1.2em;
    padding: 24px 16px;
    min-height: 105px;
    font-weight: 600;
    color: #14133a;
  }
  .cr-info {
    /* padding: 10px; */
    flex: 1;
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  .cr-creator {
    font-size: 1.4em;
    display: flex;
    flex: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .cr-img-wrapper .overlay-wrapper .cr-status .cr-text .ant-typography {
    color: white !important;
    font-size: 18px;
    line-height: 1;
  }
  .cr-buttons {
    display: flex;
    flex: 1;
    /* padding-bottom: 25px; */
    font-size: 1.2em;
  }
  .cr-card.regular .cr-buttons > div {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  .cr-stats {
    display: flex;
  }
  .cr-icon {
    display: flex;
    align-items: flex-start;
    font-size: 2em;
  }
  .cr-eth-url {
    font-size: 0.8em;
  }
  .cr-separator {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  .cr-time-ago {
    display: flex;
    flex: 0;
    min-width: 50px;
    color: white;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    padding: 15px 15px 0 15px;
  }
  .ant-skeleton-element {
    display: inline-block;
    min-width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
  }
  .ant-skeleton-image {
    width: 100%;
    height: 100%;
    /* animation: skeleton-loading 1s linear infinite alternate; */
  }
  .social-buttons-wrapper {
    display: flex;
    flex: 0;
    padding-left: 25px;
    justify-content: flex-end;
  }
  #creations.mini {
    grid-template-columns: repeat(7, 1fr);
  }
  .cr-card.mini {
    max-width: 150px;
    min-height: 200px;
    min-width: unset;
  }
  #creations.mini .cr-buttons {
    flex-direction: column;
  }
  #creations.mini .cr-buttons > div {
    display: flex;
    flex-direction: column;
  }
  #creations.mini .cr-card.mini .cr-text {
    font-size: 14px;
    min-height: 95px;
    line-height: 1em;
  }
  #creations.mini .cr-eth-url > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  #creations.mini .cr-eth-url .ant-typography {
    padding: 8px 0 0 0;
  }
  .current-stat {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 0 0 10px;
  }
  .social-icon {
    display: flex;
    align-items: center;
  }
  .creation-current-stat .count {
    font-weight: 600;
  }
  .creation-current-stat .social-icon.praise svg {
    color: rgb(121, 75, 196);
    border-color: rgb(121, 75, 196);
  }
  .creation-current-stat .social-icon.burn svg {
    color: rgb(249, 4, 128);
    border-color: rgb(249, 4, 128);
  }
  @media only screen and (max-width: 560px) {
    /* border-bottom: 1px solid #eff3f4; */
    /* background: white; */
    padding-top: 10px;
    border: none;
    margin-bottom: 15px;
    flex: 1;
    max-width: unset;
    :hover {
      transform: unset;
      box-shadow: unset !important;
      cursor: pointer;
    }
    .cr-text {
      padding: 16px 16px 0 16px;
      font-size: 18px;
      font-weight: 600;
    }
    .cr-buttons {
      height: 54px;
      /* background: yellow; */
    }
    .social-buttons-wrapper {
      height: 54px;
      align-items: center;
      justify-content: flex-start;
      padding-left: 16px;
    }
    .social-buttons-wrapper > span {
      display: flex;
      flex: 2;
      justify-content: flex-end;
      padding-right: 16px;
    }
  }
`

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
    <>
      <article style={{ display: 'fex', flexDirection: 'column' }}>
        <div
          className={isHovering ? 'hover cr-img-wrapper' : 'cr-img-wrapper'}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ height: 256 }}
        >
          <VideoCreationStyles id="creatiåon video-creation">
            <video
              style={{ width: '100%', height: '100%' }}
              preload="auto"
              poster={shaURL(item)}
              loop={true}
              muted={true}
              ref={videoRef}
            >
              <source src={shaURL(item)} type="video/mp4" />
            </video>
          </VideoCreationStyles>
        </div>
        <Text>{username}</Text>
      </article>

      <div
      // aria-labelledby="transition-modal-title"
      // aria-describedby="transition-modal-description"
      // open={cardOpen}
      // onClose={handleCardClose}
      >
        <div style={{ position: 'relative' }}>
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
            <div
              style={{
                borderRadius: '15px',
                margin: 10,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div style={{ overflowY: 'auto', maxHeight: 150 }}>
                <Text style={{ padding: 20, color: 'white' }}>
                  {text_input}
                </Text>
              </div>
            </div>

            <CardActions className="creation-actions" disableSpacing>
              <div
                style={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '25px',
                  width: 'auto',
                  padding: 0,
                  marginRight: 1,
                }}
              >
                <Button
                  aria-label="bookmark"
                  className="arrow-up"
                  icon={<TbArrowBigDown style={{ fontSize: '1.5rem' }} />}
                />
                <Button
                  aria-label="bookmark"
                  className="arrow-down"
                  icon={<TbArrowBigTop style={{ fontSize: '1.5rem' }} />}
                />
              </div>

              <Button
                aria-label="share"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '50%',
                  width: 'auto',
                  marginRight: 10,
                }}
                icon={'Share'}
              />

              <div
                style={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '25px',
                  width: 'auto',
                }}
              >
                <Button aria-label="bookmark" icon={<div>{'Share'}</div>} />
                <Button aria-label="settings" icon={<div>{'More'}</div>} />
              </div>
            </CardActions>
          </CardContent>
        </div>
      </div>
    </>
  )
}
