import * as React from 'react'
import { Box } from '@mui/material'

// ICONS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function BasicCard({
  header = <ArrowForwardIcon />,
  title = '98.3 K',
  highlight = '+18.77%',
  description = 'vs. last week',
  icon = null,
}) {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Box
          sx={{
            color: 'primary.text',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {header}
        </Box>
        <Box
          sx={{ color: 'secondary.text', fontSize: 24, fontWeight: 'medium' }}
        >
          {title}
        </Box>
        {icon ? <Box>{icon}</Box> : null}
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          {highlight}
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          {description}
        </Box>
      </Box>
    </>
  )
}
