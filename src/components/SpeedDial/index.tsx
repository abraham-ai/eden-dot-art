import * as React from 'react'
import { styled } from '@mui/material/styles'

import { Box, Typography, SpeedDial } from '@mui/material'

// ICONS
import CreateIcon from '@/components/Icons/CreateIcon'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import { TiSpiral } from 'react-icons/ti'
import SpeedDialAction from '@mui/material/SpeedDialAction'

const StyledSpeedDial = styled(SpeedDial)(() => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    // bottom: theme.spacing(2),
    // right: theme.spacing(2)
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    // top: theme.spacing(2),
    // left: theme.spacing(2)
  },
}))

const actions = [
  {
    icon: <AddPhotoAlternateIcon sx={{ fontSize: '1.7rem' }} />,
    name: <Typography sx={{ color: 'white' }}>Image</Typography>,
  },
  {
    icon: <VideoCallIcon sx={{ fontSize: '1.7rem' }} />,
    name: <Typography sx={{ color: 'white' }}>Video</Typography>,
  },
  {
    icon: <TiSpiral style={{ fontSize: '1.7rem' }} />,
    name: <Typography sx={{ color: 'white' }}>Zoom</Typography>,
  },
  {
    icon: <FileUploadIcon sx={{ fontSize: '1.7rem' }} />,
    name: <Typography sx={{ color: 'white' }}>Upload Image</Typography>,
  },
]

export default function SpeedDialEdenCreate() {
  const hidden = false

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        height: '56px',
        width: '56px',
        justifyContent: 'center',
      }}
    >
      {/* <FormControlLabel
        control={
          <Switch
            checked={hidden}
            onChange={handleHiddenChange}
            color="primary"
          />
        }
        label="Hidden"
      /> */}
      {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )} */}
      {/* <Backdrop
        sx={{ position: 'fixed', width: '100%', height: '100%' }}
        open={open}
      /> */}
      <StyledSpeedDial
        ariaLabel="Eden Create"
        hidden={hidden}
        icon={<CreateIcon />}
        direction={'down'}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name.key}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </StyledSpeedDial>
    </Box>
  )
}
