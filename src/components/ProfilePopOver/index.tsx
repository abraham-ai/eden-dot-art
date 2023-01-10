import React from 'react'
import PropTypes from 'prop-types'

// MUI
import {
  Box,
  Button,
  Fade,
  Paper,
  Popper,
  styled,
  Typography,
} from '@mui/material'

// MUI LIB
import {
  usePopupState,
  bindToggle,
  bindPopper,
} from 'material-ui-popup-state/hooks'
import CreatorProfileAddress from '../CreatorProfileAddress'

const PopperStyles = styled(Box)(
  () => `
  .popper-wrapper: {
    padding: 20px,
  },
  `,
)

const PopperPopupState = () => {
  const popupState = usePopupState({ variant: 'popper', popupId: 'demoPopper' })
  return (
    <PopperStyles>
      <Button variant="contained" {...bindToggle(popupState)}>
        Avatar
      </Button>

      <Popper {...bindPopper(popupState)} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className="popper-wrapper">
              <CreatorProfileAddress />
            </Paper>
          </Fade>
        )}
      </Popper>
    </PopperStyles>
  )
}

PopperPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default PopperPopupState
