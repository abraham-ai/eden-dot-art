// useEffec
import { useState } from 'react' // useMemo,
import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

export default function CollectionsPage() {

  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>

      <section>
        {'Collections'}
      </section>
    </>
  )
}

CollectionsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
