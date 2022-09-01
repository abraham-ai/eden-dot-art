import * as React from 'react';

// UTILS
import time_ago from '@/util/timeAgo';

// STYLES
import { styled } from '@mui/material/styles';

// COMPONENTS
import AppLogo from '@/components/AppLogo';

// MUI COMPONENTS
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  SvgIcon,
  Icon,
  Tooltip,
  IconButton,
  Typography
} from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';

// COLORS
import { red } from '@mui/material/colors';

// ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RiMagicLine, RiMagicFill } from 'react-icons/ri';
import { IoFlashOutline, IoFlashSharp } from 'react-icons/io5';
import { TiArrowShuffle } from 'react-icons/ti';
import {
  HiSparkles,
  HiOutlineSparkles,
  HiCube,
  HiOutlineCube
} from 'react-icons/hi';
import IosShareIcon from '@mui/icons-material/IosShare';
import { FaDiscord, FaRobot, FaRetweet, FaHashtag } from 'react-icons/fa';
import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

// META ICONS
import { GrChannel } from 'react-icons/gr';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MemoryIcon from '@mui/icons-material/Memory';
import { SiEthereum } from 'react-icons/si';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

export default function CreationCardIG({ creation }) {
  const { address, text_input, date, _id, sha, status_code, intermediate_sha } =
    creation;
  const { model_name, clip_model, width, height, username } = creation.config;
  // const { generator_name } = creation.generator.name;
  const { origin, author_name, channel_name } = creation.source;

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//';

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentUserName = origin === 'discord' ? author_name : address;
  const creationTimeAgo = time_ago(date.toString(), date);

  const currentGuildIcon =
    creation.source.guild_name === 'abraham-ai' ? (
      <FaDiscord style={{ fontSize: '1.2rem' }} />
    ) : (
      // <SiEthereum />
      <FaDiscord />
      // <AppLogo style={{ width: 10 }} size={'icon-small'} />
    );

  const currentModel = model_name !== null ? model_name : null;
  const currentClipModel = clip_model !== null ? clip_model : null;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={currentUserName}
        subheader={creationTimeAgo}
      />
      <CardMedia
        component="img"
        height="194"
        image={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text_input}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <HiOutlineSparkles />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <AiOutlineFire />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FaRetweet />
        </IconButton>
        <IconButton aria-label="share">
          <BookmarkBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <IosShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/* COLLAPSE */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
      </Collapse>
    </Card>
  );
}