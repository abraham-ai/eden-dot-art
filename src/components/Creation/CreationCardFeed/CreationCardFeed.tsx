import { useState } from 'react'

// STYLES
import styled from 'styled-components'

// NEXTJS
import Image from 'next/image'

// ANTD
import { Typography, Modal, Popover, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'

// LIBS
import Blockies from 'react-blockies'

// ICONS
import CloseIcon from '@mui/icons-material/Close'
import { StarOutlined, ShareAltOutlined, EyeOutlined } from '@ant-design/icons'

const CardStyles = styled.section`
    position: relative;
    width: 100%;
    background: blue;
    padding-right: 70px;

    #creation-card {
      box-shadow: unset !important;
      background: unset;
      border-radius: 10px;
    }
    #creation-card:hover {
      transform: unset;
      cursor: zoom-in;
    }
    #creation-card:hover .creation-content {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
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
    .close-icon-wrapper {
      position: fixed;
      top: 10px;
      right: 10px;
      color: black;
    }
    .close-icon-wrapper:hover {
      cursor: pointer;
      z-index: 50;
    }
`

export default function CreationCardFeed({ creation }) {
  // console.log(creation)
  // add source, width, height

  // MAIN
  // const address = creation.address === undefined ? 'none' : creation.address
  const text_input =
    creation.text_input === undefined ? 'none' : creation.text_input
  const intermediate_sha =
    creation.intermediate_sha === undefined ? [] : creation.intermediate_sha

  // DIMENSIONS
  // const width = creation.width === undefined ? 100 : creation.width
  // const height = creation.height === undefined ? 100 : creation.height

  // SOURCE
  // const origin = creation.source.origin === undefined ? 'none' : creation.source

  const { address } = creation.source // origin, author_name, 

  // const { origin } =
  //   creation.source.origin === undefined ? 'none' : creation.source
  // const { author_name } =
  //   creation.source.author_name === undefined
  //     ? 'none'
  //     : creation.source.author_name
  // // const author_name = creation.source.author_name === undefined ? 'none' : creation.source
  // // const channel_name = creation.source.channel_name === undefined ? 'none' : creation.source
  // // const guild_name = creation.source.guild_name === undefined ? 'none' : creation.source
  // const { address } =
  //   creation.source.address === undefined ? 'none' : creation.source

  // GENERATOR
  // const generator_name =
  creation.generator === undefined ? 'none' : creation.generator

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)

  const handleModalClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // console.log('handleCardClose!')
    // console.log(event)
    event ? setModalOpen(false) : null
  }

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'
  // const STG_URL = 'https://minio.aws.abraham.fun/creations-stg/'

  const imageFullURL =
    creation.intermediate_sha === undefined
      ? 'none'
      : PRD_URL + intermediate_sha[intermediate_sha.length - 1]

  // const [expanded, setExpanded] = useState(false)

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  // }

  // console.log({ creation })
  // const currentUserName = origin === 'discord' ? author_name : address
  // console.log({ currentUserName, origin, author_name, address })

  // const creationTimeAgo = 100

  // function randomColor() {
  //   const hex = Math.floor(Math.random() * 0xffffff)
  //   const color = '#' + hex.toString(16)

  //   return color
  // }

  let displayAddress = address?.substr(0, 6)
  displayAddress += '...' + address.substr(-4)

  // const currentGuildIcon =
  //   guild_name === 'abraham-ai' ? (
  //     <FaDiscord style={{ fontSize: '1.2rem' }} />
  //   ) : (
  //     // <SiEthereum />
  //     <FaDiscord />
  //     // <AppLogo style={{ width: 10 }} size={'icon-small'} />
  //   )

  // console.log(address)
  // console.log(cardOpen)
  // console.log(creation)

  // const currentClipModel = clip_model !== null ? clip_model : null

  return (
    <CardStyles>
      <div id='creation-card' onClick={handleModalOpen}>
        <div style={{ position: 'relative', background: 'lime', width: '100%' }}>
          
          <article style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'blue' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
              <span style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '32px',
                    height: '32px',
                    marginRight: 10,
              }}>
                  <Blockies seed={address} />
              </span>
              <Text>{displayAddress}</Text>
            </div>
            <Button shape='round' size='large'>Follow</Button>
          </article>

          <div style={{ border: '4px solid hotpink', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>

              <span style={{ maxWidth: 400, background: 'orange', position: 'relative' }}>
                <img
                  src={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
                  height={512}
                  width={512}
                  alt='Eden Creation'
                  // layout='responsive'
                  style={{ position: 'relative', maxWidth: '400px', height: 'auto' }}
                />

                <article className='creation-content'>
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
                            className='prompt-command'
                            style={{ fontWeight: 'bold', fontFamily: 'courier', color: '#8C7CF0' }}
                          >
                            {'/create'}
                          </Text>
                          <Text>{'2 days ago'}</Text>
                        </span>

                        <Text style={{ color: 'gray' }}>
                          {text_input}
                        </Text>
                        
                        <Popover content={<ProfilePopOver profileAddress={address} />}  placement="bottomLeft">
                          <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                            <div style={{
                                  borderRadius: '50%',
                                  overflow: 'hidden',
                                  width: '32px',
                                  height: '32px',
                                  marginRight: 10,
                            }}>
                                <Blockies seed={address} />
                            </div>
                            <Text>{displayAddress}</Text>
                          </div>
                        </Popover>
                      </div>
                    </div>
                  </article>
              </span>

              <ul style={{ display: 'flex', flexDirection: 'column', background: 'cyan' }}>
                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 10 }}>
                  <Button shape='circle' icon={<StarOutlined />}></Button>
                  <Text>43.6k</Text>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 10 }}>
                  <Button shape='circle' icon={<EyeOutlined />}></Button>
                  <Text>295</Text>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Button shape='circle' icon={<ShareAltOutlined />}></Button>
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
          <div className='close-icon-wrapper' onClick={handleModalClose}>
            <CloseIcon className="close-icon" fontSize={'large'} />
          </div>

          <div>
            {/* styles={BoxModalStyle} */}
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
                    background: 'yellow'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Popover 
                      content={<ProfilePopOver 
                      profileAddress={ address} />}  
                      placement="bottomLeft">

                      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                        <div style={{
                              borderRadius: '50%',
                              overflow: 'hidden',
                              width: '32px',
                              height: '32px',
                              marginRight: 10,
                        }}>
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

              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box
                sx={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '25px',
                  width: 'auto',
                  padding: 0,
                  mr: 1,
                }}
              >
                <IconButton aria-label="bookmark" className="arrow-up">
                  <TbArrowBigDown style={{ fontSize: '1.5rem' }} />
                </IconButton>
                <IconButton aria-label="bookmark" className="arrow-down">
                  <TbArrowBigTop style={{ fontSize: '1.5rem' }} />
                </IconButton>
              </Box>
              <IconButton
                aria-label="share"
                sx={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '50%',
                  width: 'auto',
                  mr: 1,
                }}
              >
                <IosShareIcon />
              </IconButton>
              <Box
                sx={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '25px',
                  width: 'auto',
                }}
              >
                <IconButton aria-label="bookmark">
                  <BookmarkBorderIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              </Box>
            </Box> */}


              <div>
                {/* <Chip
                sx={{ m: 0.5 }}
                avatar={
                  <Avatar
                    alt="generator name"
                    src="https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/a432c21c-bb12-4f38-b5e2-1c12a3c403f6/Animated-Logo_1.gif?format=48w"
                  />
                }
                label={generator_name}
                variant="outlined"
              />
              <Chip
                sx={{ m: 0.5 }}
                avatar={
                  <Avatar alt="clip model" src="/static/images/avatar/1.jpg">
                    <OpenInFullIcon sx={{ fontSize: '1rem' }} />
                  </Avatar>
                }
                label={`${width}x${height}`}
                variant="outlined"
              />
              <Chip
                sx={{ m: 0.5 }}
                avatar={
                  <Avatar alt="guild name" src="/static/images/avatar/1.jpg">
                    {currentGuildIcon}
                  </Avatar>
                }
                label={guild_name}
                variant="outlined"
              />
              <Chip
                sx={{ m: 0.5 }}
                avatar={
                  <Avatar alt="channel name" src="/static/images/avatar/1.jpg">
                    <FaHashtag style={{ fontSize: '1rem' }} />
                  </Avatar>
                }
                label={channel_name}
                variant="outlined"
              /> */}

                {/* {generator_name ? (
                <Tooltip title="Model Name">
                  <Chip
                    sx={{ m: 0.5 }}
                    avatar={
                      <Avatar
                        alt="model name"
                        src="/static/images/avatar/1.jpg"
                      >
                        <MemoryIcon sx={{ fontSize: '1.5rem' }} />
                      </Avatar>
                    }
                    label={generator_name}
                    variant="outlined"
                  />
                </Tooltip>
              ) : null} */}

                {/* {currentClipModel ? (
                <Tooltip title="Clip Model">
                  <Chip
                    sx={{ m: 0.5 }}
                    avatar={
                      <Avatar
                        alt="clip model"
                        src="/static/images/avatar/1.jpg"
                      >
                        <LocationSearchingIcon sx={{ fontSize: '1.3rem' }} />
                      </Avatar>
                    }
                    label={creation.config.clip_model}
                    variant="outlined"
                  />
                </Tooltip>
              ) : null} */}
              </div>
            </div>
          </div>
        </>
      </Modal>

      {/* <Box className="creation-header">
        <Box sx={{ display: 'flex' }}>
          <Avatar
            sx={{ bgcolor: randomColor(), width: 20, height: 20, mr: 1 }}
            aria-label="username"
          />
          <Typography
            noWrap={true}
            sx={{ display: 'inline-block', color: '#111', fontWeight: 600 }}
          > */}

      {/* {currentUserName === 'none'
              ? currentUserName
              : currentUserName.substring(0, currentUserName.indexOf('#'))} */}
      {/* </Typography>
        </Box>
        <span style={{ display: 'none' }}>{cardOpen}</span>
      </Box> */}
    </CardStyles>
  )
}
