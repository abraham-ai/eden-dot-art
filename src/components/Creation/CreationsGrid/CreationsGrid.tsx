import { useState, useEffect, useCallback } from 'react'

// ANTD
import { Typography } from 'antd'
const { Text } = Typography

// LIBS
import axios from 'axios'
import { useInView } from 'react-intersection-observer'

// COMPONENTS
import Masonry from 'react-masonry-css'
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;

  .cr-grid-masonry {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .cr-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .cr-grid-masonry_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`

// CONSTS
const PAGE_LENGTH = 10
const masonryOptions = { transitionDuration: 0 }
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  580: 1,
}

export default function CreationsGrid({ username = null }) {
  const [creations, setCreations] = useState<object[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [paginate, setPaginate] = useState(true)
  const [cutoffTime, setCutoffTime] = useState<number | null>(null)
  // const [breakpointCols] = useState(0)

  const getMoreCreations = useCallback(async () => {
    if (!paginate) return

    setLoading(true)

    try {
      let filter = {
        latestTime: cutoffTime,
        limit: PAGE_LENGTH,
      }

      if (username != null) {
        filter = Object.assign(filter, { username })
      }

      const response = await axios.post('/api/creations', filter)

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
      console.error(error)
      setMessage(`Error:`)
    }
    setLoading(false)
  }, [creations, cutoffTime, paginate, username])

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
    <CreationsGridStyles id="creations-grid">
      <div id="creations-grid-wrapper">
        {creations.length < 1 ? (
          <Loader />
        ) : (
          <div style={{ width: '100%', minHeight: 393, marginTop: 20 }}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={'cr-grid-masonry'}
              columnClassName="cr-grid-masonry_column"
            >
              {creations.map((creation, index) => (
                <CreationCardMinimal index={index} creation={creation} />
              ))}
            </Masonry>
          </div>
        )}
      </div>

      {loading && <Loader />}

      {message}

      <div ref={ref}></div>
    </CreationsGridStyles>
  )
}
