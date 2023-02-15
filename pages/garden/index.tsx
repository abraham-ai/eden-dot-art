'use client'

import React from 'react'
import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// EDEN COMPONENTS
import CreationsGrid from '@/components/Creation/CreationsGrid/CreationsGrid'

// STYLES
import styled from 'styled-components'

const GardenStyles = styled.section`
  width: 100vw;
  margin: 100px 0 0 0;
`

export default function GardenPage() {
  return (
    <>
      <Head>
        <title>Garden</title>
      </Head>
      <GardenStyles id="garden">
        <CreationsGrid />
      </GardenStyles>
    </>
  )
}

GardenPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
