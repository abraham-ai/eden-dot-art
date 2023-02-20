// ANTD
import { Button, Popover } from 'antd'

// EDEN COMPONENTS
import CreatorProfileAddress from '@/components/Creator/CreatorProfileAddress/CreatorProfileAddress'

// STYLES
import { ProfilePopOverStyles } from './ProfilePopOverStyles'

const ProfilePopOver = ({ profileAddress }) => {
  return (
    <ProfilePopOverStyles>
      <Button>Avatar</Button>

      <Popover>
        <CreatorProfileAddress profileAddress={profileAddress} />
      </Popover>
    </ProfilePopOverStyles>
  )
}

export default ProfilePopOver
