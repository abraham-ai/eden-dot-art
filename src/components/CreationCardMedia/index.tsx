import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

// UTILS
import time_ago from '@/util/timeAgo';

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

export default function CreationCardMedia({ creation }) {
  const theme = useTheme();

  const { address, text_input, date, _id, sha, status_code, intermediate_sha } =
    creation;
  const { model_name, clip_model, width, height, username } = creation.config;
  // const { generator_name } = creation.generator.name;
  const { origin, author_name, channel_name } = creation.source;

  const currentUserName = origin === 'discord' ? author_name : address;
  const creationTimeAgo = time_ago(date.toString(), date);

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//';

  const currentGuildIcon =
    creation.source.guild_name === 'abraham-ai' ? (
      <FaDiscord style={{ fontSize: '1.2rem' }} />
    ) : (
      // <SiEthereum />
      <FaDiscord />
      // <AppLogo style={{ width: 10 }} size={'icon-small'} />
    );

  return (
    <Card sx={{ display: 'flex', maxWidth: 350 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}
        >
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {currentUserName}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, maxHeight: 100 }}
        image={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
        alt={text_input}
      />
    </Card>
  );
}
