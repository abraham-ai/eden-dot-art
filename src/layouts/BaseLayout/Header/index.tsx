import { useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

import { Button, Space } from 'antd';

// COMPONENTS
import Logo from '@/components/Logo/Logo'
import CreateModal from '@/components/Create/CreateModal/CreateModal'
import CreateButton from '@/components/Create/CreateButton/CreateButton'
// import ProfileButton from '@/components/Account/ProfileButton/ProfileButton'
import PendingCreations from '@/components/Create/CreateModal/PendingCreations'
import SettingsButton from '@/components/Account/SettingsButton/SettingsButton'

// STYLES
import { HeaderWrapperStyles } from './HeaderStyles'

export default function Header() {
  const {
    isConnected,
    isSignedIn,
    isCreateUIModalOpen,
    isCreationModalOpen,
    isSignInModalOpen,
  } = useContext(AppContext);

  return (
    <HeaderWrapperStyles id="header-wrapper">
      <Logo />
      <div className="header-connect-wrapper">
        {isCreateUIModalOpen}
        {isCreationModalOpen}
        {isSignInModalOpen}
        <Space>
          <Button shape="round" size="large" type="primary" href="/garden" >All creations</Button>
          <Button shape="round" size="large" type="primary" href="/praised">🙌</Button>
          <Button shape="round" size="large" type="primary" href="/burned">🔥</Button>
          <Button shape="round" size="large" type="primary" href="/collections">Collections</Button>
          {isConnected && (
            <Button shape="round" size="large" type="primary" href="/profile">My profile</Button>
          )}
          {isConnected && isSignedIn && (
            <PendingCreations />
          )}
          {isConnected && (
            <>
              <CreateButton />
              <CreateModal />
            </>
          )}
        </Space>
        <SettingsButton />
      </div>
    </HeaderWrapperStyles>
  )
}
