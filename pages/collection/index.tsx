import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// LAYOUT
import BaseLayout from 'src/layouts/BaseLayout'

// EDEN COMPONENTS
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>

      <section>
        <CreationsGrid />
      </section>
    </>
  )
}

CollectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
