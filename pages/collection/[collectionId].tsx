import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// EDEN COMPONENTS
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

// LAYOUTS
import BaseLayout from 'src/layouts/BaseLayout'

export default function CreationsPage() {
  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>

      <section maxWidth="xl">
        <CreationsGrid />
      </section>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
