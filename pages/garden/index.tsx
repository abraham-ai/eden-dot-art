import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// COMPONENTS
import CreationsViewer from '@/components/CreationsViewer/CreationsViewer'

export default function CreationsPage() {
  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <CreationsViewer />
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
