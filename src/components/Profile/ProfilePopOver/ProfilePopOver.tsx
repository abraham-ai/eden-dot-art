import React from 'react'
import PropTypes from 'prop-types'

// MUI
import { Button, Popover } from 'antd'

// EDEN COMPONENTS
import CreatorProfileAddress from '@/components/Creator/CreatorProfileAddress/CreatorProfileAddress'

// STYLES
import styled from 'styled-components'

const PopperStyles = styled.section`
  .popper-wrapper: {
    padding: 20px,
  },
`

const ProfilePopOver = ({ profileAddress }) => {
  return (
    <PopperStyles>
      <Button>Avatar</Button>

      <Popover>
        <CreatorProfileAddress profileAddress={profileAddress} />
      </Popover>
    </PopperStyles>
  )
}

ProfilePopOver.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default ProfilePopOver
