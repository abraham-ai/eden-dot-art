import { useState, useEffect, useCallback } from 'react'
import type { ReactElement } from 'react'

// NEXT
import Head from 'next/head'

// NAV
import BaseLayout from 'src/layouts/BaseLayout'

// LIBS
import { useInView } from 'react-intersection-observer'
import Masonry from 'react-masonry-component'
import axios from 'axios'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'


// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;
`

// CONSTS
const PAGE_LENGTH = 10
const masonryOptions = { transitionDuration: 0 };
const imagesLoadedOptions = { background: '.my-bg-image-el' }


export default function CreationsPage() {
  const [creations, setCreations] = useState<object[]>([])
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [paginate, setPaginate] = useState(true)
  const [cutoffTime, setCutoffTime] = useState<number>(0)
  const [breakpointCols] = useState(3) // setBreakpointCols

  const getMoreCreations = useCallback(async () => {
    if (!paginate) return

    setLoading(true)

    try {
      const response = await axios.post('/api/creations', {
        latestTime: cutoffTime,
        limit: PAGE_LENGTH,
      })

      const moreCreations =
        response.data.creations &&
        response.data.creations.map((creation: any) => {
          return {
            key: creation._id,
            address: creation.user,
            uri: creation.uri,
            timestamp: creation.createdAt,
            prompt: creation.task.config.text_input,
            status: creation.task.status,
            generator: creation.task.generator.generatorName,
          }
        })

      if (moreCreations.length == 0) {
        setLoading(false)
        setPaginate(false)
        return
      }

      setCreations([...creations, ...moreCreations])

      const lastCreation = moreCreations[moreCreations.length - 1]
      const earliestTime = Date.parse(lastCreation.timestamp) - 1
      setCutoffTime(earliestTime)
    } catch (error: any) {
      const errorMessage = error.message
      const errorName = error.name
      const errorCode = error.code

      setMessage(`Error: ${errorMessage}`)
    }
    setLoading(false)
  }, [creations, cutoffTime, paginate])

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    const loadMore = async () => {
      await getMoreCreations()
    }
    if (inView) {
      loadMore()
    }
  }, [inView, getMoreCreations])

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <CreationsGridStyles id="creations-grid">
        <div style={{ width: '100%', minHeight: 393, marginTop: 200 }}>
            <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
            {creations.map((creation, index) => (
              <CreationCardMinimal key={index} creation={creation} />
            ))}
          </Masonry>
        </div>
        {loading && <Loader />}
        
        {message}
        <div ref={ref}></div>
      </CreationsGridStyles>
    </>
  )
}

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}