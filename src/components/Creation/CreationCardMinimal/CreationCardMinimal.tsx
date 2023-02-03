import { useState } from 'react'

// STYLES
import styled from 'styled-components'

// NEXTJS
import Image from 'next/image'
import Link from 'next/link'

// ROUTER
import { useRouter } from 'next/router'

// HOOKS
import useWindowDimensions from '@/hooks/useWindowDimensions'

// ANTD
import { Popover, Modal, Typography, Button } from 'antd'
const { Text } = Typography

// EDEN COMPONENTS
import ProfilePopOver from '@/components/Profile/ProfilePopOver/ProfilePopOver'
// import { IconButtonProps } from '@mui/material/IconButton'

// LIBS
import Blockies from 'react-blockies'

// ICONS
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
// import IosShareIcon from '@mui/icons-material/IosShare'
// import { FaDiscord } from 'react-icons/fa'
// FaHashtag

// META ICONS
// import OpenInFullIcon from '@mui/icons-material/OpenInFull'
// import MemoryIcon from '@mui/icons-material/Memory'
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
// import { TbArrowBigDown, TbArrowBigTop } from 'react-icons/tb'

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean
// }
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaStar, FaRetweet, FaRegStar } from 'react-icons/fa'
import { SearchOutlined } from '@ant-design/icons'
import { IoIosShareAlt } from 'react-icons/io'
// import { SyncOutlined } from '@ant-design/icons';
// iSparkles,
// import { AiFillEye } from 'react-icons/ai'
// import { AiFillFire } from 'react-icons/ai'
import { HiOutlineArrowNarrowUp, HiOutlineFingerPrint } from 'react-icons/hi' // HiCommandLine
import { MdOutlineDateRange } from 'react-icons/md'
import { BiUserPlus } from 'react-icons/bi'
import { BsFillBookmarkFill, BsAspectRatio } from 'react-icons/bs'
import { SlSizeFullscreen } from 'react-icons/sl'

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { ...other } = props
//   return <IconButton {...other} />
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }))

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
  // const { width } = useWindowDimensions()

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

export default function CreationCardMinimal({ creation }) {
  // console.log(creation)
  // add source, width, height

  const router = useRouter()

  // MAIN
  // const address = creation.address === undefined ? 'none' : creation.address
  // const text_input =
  //   creation.text_input === undefined ? 'none' : creation.text_input
  // const intermediate_sha =
  //   creation.intermediate_sha === undefined ? [] : creation.intermediate_sha

  // DIMENSIONS
  // const width = creation.width === undefined ? 100 : creation.width
  // const height = creation.height === undefined ? 100 : creation.height

  // SOURCE
  // const origin = creation.source.origin === undefined ? 'none' : creation.source

  //const { address } = creation.source // origin, author_name,
  const { key, address, uri, timestamp, prompt, status, generator } = creation

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

  // event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  const handleModalOpen = () => {
    // event.preventDefault()
    // router.push(
    //   `/creation/[creationId]`,
    //   `/creation/${creation.id}`,
    //   { shallow: true }
    // )

    setModalOpen(true)
  }

  const handleModalClose = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // event.preventDefault()
    // console.log('handleCardClose!')
    // console.log(event)
    router.push('/garden', undefined, { scroll: false })
    event ? setModalOpen(false) : null
  }

  // const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'
  // const STG_URL = 'https://minio.aws.abraham.fun/creations-stg/'

  // const imageFullURL =
  //   creation.intermediate_sha === undefined
  //     ? 'none'
  //     : PRD_URL + intermediate_sha[intermediate_sha.length - 1]

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
      <article id="creation-card">
        <Link
          href={`/garden?creationId=${creation.id}`}
          as={`/creation/${creation.id}`}
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
                // style={{ position: 'relative', maxWidth: '100%', height: 'auto' }}
              />

              <article className="creation-content">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    justifyContent: 'space-between'
                  }}
                >
                  <span className='cr-social like' style={{ margin: 10 }}>
                    <Button className="btn" shape="circle" type="default">
                      <FaStar className="icon" />
                      {/* <Text className='text'>303</Text> */}
                    </Button>
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', margin: 10 }}>
                    <span className="cr-social remix" style={{ marginBottom: 10 }}>
                      <Button className="btn" shape="circle" type="default">
                        <FaRetweet className="icon" />
                        {/* <Text className='text'>310</Text> */}
                      </Button>
                    </span>

                    <span className="cr-social bookmark">
                      <Button className="btn" shape="circle" type="default">
                        <BsFillBookmarkFill className="icon" />
                        {/* <Text className='text'>Save</Text> */}
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
                        // background: 'cyan',
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

                {/* <div className='creation-actions'> */}
                {/* <Button>
                        <FaRetweet />
                      </Button> */}
                {/* </IconButton>
                      <IconButton aria-label="recreation"> */}
                {/* </IconButton> */}

                {/* <Box
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
                      </IconButton> */}

                {/* <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                      </ExpandMore> */}

                {/* <Box
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
                      </Box> */}
                {/* </div> */}
              </article>
            </>
          </div>
        </Link>

        {/* COLLAPSE */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Chip
                sx={{ m: 0.5 }}
                avatar={
                  <Avatar
                    alt="generator name"
                    src="https://images.squarespace-cdn.com/content/v1/6213c340453c3f502425776e/a432c21c-bb12-4f38-b5e2-1c12a3c403f6/Animated-Logo_1.gif?format=48w"
                  />
                }
                label={creation.generator.name}
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
              />

              {generator_name ? (
                <Tooltip title="Model Name">
                  <Chip
                    sx={{ m: 0.5 }}
                    avatar={
                      <Avatar alt="model name" src="/static/images/avatar/1.jpg">
                        <MemoryIcon sx={{ fontSize: '1.5rem' }} />
                      </Avatar>
                    }
                    label={creation.config.generator_name}
                    variant="outlined"
                  />
                </Tooltip>
              ) : null}

              {currentClipModel ? (
                <Tooltip title="Clip Model">
                  <Chip
                    sx={{ m: 0.5 }}
                    avatar={
                      <Avatar alt="clip model" src="/static/images/avatar/1.jpg">
                        <LocationSearchingIcon sx={{ fontSize: '1.3rem' }} />
                      </Avatar>
                    }
                    label={creation.config.clip_model}
                    variant="outlined"
                  />
                </Tooltip>
              ) : null}
            </CardContent>
          </Collapse> */}
      </article>

      <Modal
        width="100%"
        bodyStyle={{ height: '100%' }}
        open={
          creation.id === router.query.creationId
            ? !!router.query.creationId
            : false
        }
        centered
        keyboard
        // mask
        // maskClosable
        onCancel={handleModalClose}
      >
        <>
          <Button
            className='close-icon-wrapper'
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              color: 'black',
            }}
            onClick={e => handleModalClose(e)}
          >
            <CloseIcon className='close-icon' fontSize={'large'} />
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
                {/* maxHeight: '612px',
                  maxWidth: '612px', */}

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

            {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
              </ExpandMore> */}

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
