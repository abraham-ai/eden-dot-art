import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// COMPONENTS
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

export default function CreationsPage() {
  return (
    <>
      <Head>
        <title>Garden of Eden</title>
      </Head>
      <CreationsGrid />
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
