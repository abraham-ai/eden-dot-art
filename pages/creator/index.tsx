import React from 'react'
import type { ReactElement } from 'react'

// LAYOUTS
import BaseLayout from 'src/layouts/BaseLayout'

// COMPONENTS
import EditProfile from '@/components/Profile/EditProfile/EditProfile'

export default function ProfilePage() {
  return (
    <>
      <EditProfile />
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
