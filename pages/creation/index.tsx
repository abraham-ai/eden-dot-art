import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'


export default function CreationsPage() {

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>

      <section>

        {'Creations Page'}
      </section>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
