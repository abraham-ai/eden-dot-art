import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// EDEN COMPONENTS
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;
`

export default function CreationsPage() {
  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <CreationsGridStyles id="creations-grid">
        <CreationsGrid />
      </CreationsGridStyles>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
