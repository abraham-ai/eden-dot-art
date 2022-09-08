import { useState } from 'react'

// STYLES
import { styled } from '@mui/material/styles'

// COMPONENTS

// MUI COMPONENTS
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  // CardHeader,
  CardMedia,
  Chip,
  // Collapse,
  IconButton,
  Modal,
  Backdrop,
  Tooltip,
  Typography,
} from '@mui/material'
// import { IconButtonProps } from '@mui/material/IconButton'

// COLORS
// import { red } from '@mui/material/colors'

// ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IosShareIcon from '@mui/icons-material/IosShare'
import { FaDiscord, FaHashtag } from 'react-icons/fa'
// import { HiOutlineSparkles } from 'react-icons/hi'
// FaRetweet,
// import { AiOutlineFire } from 'react-icons/ai'

// META ICONS
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import MemoryIcon from '@mui/icons-material/Memory'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { TbArrowBigDown, TbArrowBigTop } from 'react-icons/tb'

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean
// }

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

const BoxModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  maxHeight: '90%',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CardStyles = styled(Card)(
  () => `
    maxWidth: 345; 
    position: relative;
    box-shadow: unset !important;
    background: unset;
    #creation-card {

    }
    #creation-card:hover {
      transform: unset;
      cursor: zoom-in;
    }
    #creation-card:hover .creation-content {
      display: block;
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
  `,
)

export default function CreationCardIG({ creation }) {
  const { address, text_input, intermediate_sha } = creation
  const { model_name, clip_model, width, height } = creation.config
  const { origin, author_name, channel_name } = creation.source

  const [cardOpen, setCardOpen] = useState(false)
  const handleCardOpen = () => setCardOpen(true)
  const handleCardClose = () => setCardOpen(false)

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

  // const [expanded, setExpanded] = React.useState(false)

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  // }

  const currentUserName = origin === 'discord' ? author_name : address
  // const creationTimeAgo = 100

  function randomColor() {
    const hex = Math.floor(Math.random() * 0xffffff)
    const color = '#' + hex.toString(16)

    return color
  }

  const currentGuildIcon =
    creation.source.guild_name === 'abraham-ai' ? (
      <FaDiscord style={{ fontSize: '1.2rem' }} />
    ) : (
      // <SiEthereum />
      <FaDiscord />
      // <AppLogo style={{ width: 10 }} size={'icon-small'} />
    )

  const currentClipModel = clip_model !== null ? clip_model : null

  return (
    <CardStyles>
      <Card id="creation-card" onClick={handleCardOpen}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="auto"
            image={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
            alt="Card Media"
            sx={{ position: 'relative' }}
          />

          <CardContent className="creation-content">
            <Box
              sx={{
                borderRadius: '15px',
                m: 1,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <Box sx={{ overflowY: 'auto', maxHeight: 150 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ p: 2, color: 'white' }}
                >
                  {text_input}
                </Typography>
              </Box>
            </Box>
            <CardActions className="creation-actions" disableSpacing>
              {/* <IconButton aria-label="praise">
          <HiOutlineSparkles />
        </IconButton>
        <IconButton aria-label="burn">
          <AiOutlineFire />
        </IconButton>
        <IconButton aria-label="recreation">
          <FaRetweet />
        </IconButton> */}

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
              {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
              </ExpandMore> */}

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
            </CardActions>
          </CardContent>
        </Box>

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
              label={creation.source.guild_name}
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

            {model_name ? (
              <Tooltip title="Model Name">
                <Chip
                  sx={{ m: 0.5 }}
                  avatar={
                    <Avatar alt="model name" src="/static/images/avatar/1.jpg">
                      <MemoryIcon sx={{ fontSize: '1.5rem' }} />
                    </Avatar>
                  }
                  label={creation.config.model_name}
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
      </Card>

      <Box className="creation-header">
        <Box sx={{ display: 'flex' }}>
          <Avatar
            sx={{ bgcolor: randomColor(), width: 20, height: 20, mr: 1 }}
            aria-label="recipe"
          />
          <Typography noWrap={true} sx={{ display: 'inline-block' }}>
            {currentUserName.substring(0, currentUserName.indexOf('#'))}
          </Typography>
        </Box>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={cardOpen}
        onClose={handleCardClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={BoxModalStyle}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
              alt="Card Media"
              sx={{ position: 'relative', maxHeight: '500px' }}
            />

            <Box sx={{ overflowY: 'auto', maxHeight: 150 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ p: 2, color: 'white' }}
              >
                {text_input}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            </Box>

            {/* <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
              </ExpandMore> */}

            <Box>
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
                label={creation.source.guild_name}
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
              {model_name ? (
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
                    label={creation.config.model_name}
                    variant="outlined"
                  />
                </Tooltip>
              ) : null}

              {currentClipModel ? (
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
              ) : null}
            </Box>
          </Box>
        </Box>
      </Modal>
    </CardStyles>
  )
}
