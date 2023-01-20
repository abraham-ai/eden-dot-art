import * as React from 'react'
import { useTheme } from '@mui/material/styles'

// MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'

// ICONS
import {
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon,
} from '@mui/icons-material'

export default function CreationCardMedia({ creation }) {
  const theme = useTheme()

  const { address, text_input, intermediate_sha } = creation
  // const { generator_name } = creation.generator.name;
  const { origin, author_name } = creation.source

  const currentUserName = origin === 'discord' ? author_name : address

  const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

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
  )
}
