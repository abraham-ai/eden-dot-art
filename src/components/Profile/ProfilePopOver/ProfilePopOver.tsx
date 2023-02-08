import React from 'react'
import PropTypes from 'prop-types'

// MUI
import { Button, Popover } from 'antd'

// EDEN COMPONENTS
import CreatorProfileAddress from '../../Creator/CreatorProfileAddress/CreatorProfileAddress'

// STYLES
import styled from 'styled-components'

const PopperStyles = styled.section`
  .popper-wrapper: {
    padding: 20px,
  },
`

const PopperPopupState = () => {
  return (
    <PopperStyles>
      <Button>Avatar</Button>

      <Popover>
        <CreatorProfileAddress />
      </Popover>
    </PopperStyles>
  )
}

PopperPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default PopperPopupState
