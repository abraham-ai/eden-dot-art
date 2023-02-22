import { useState } from 'react'

// TYPES
import type { ReactElement } from 'react'
import Creation from '@/interfaces/Creation'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// LIBS
import Masonry from 'react-masonry-css'

// COMPONENTS
import CreationCard from '@/components/Creation/CreationCard/CreationCard'
import Loader from '@/components/Loader/Loader'

// CONSTS
import { breakpointColumnsObj } from '@/consts/breakpointColumns'

// STYLES
import { CreationStyles } from './CreationStyles'

export default function CreationsPage() {
  const [creations] = useState<Creation[]>([])

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>

      <section>
        {creations.length < 1 ? (
          <Loader />
        ) : (
          <CreationStyles id="creation-masonry-wrapper">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={'cr-grid-masonry'}
              columnClassName="cr-grid-masonry_column"
            >
              {creations.map(creation => (
                <CreationCard creation={creation} />
              ))}
            </Masonry>
          </CreationStyles>
        )}
      </section>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
