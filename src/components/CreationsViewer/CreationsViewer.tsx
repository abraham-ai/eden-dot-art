import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// MUI
import Masonry from '@mui/lab/Masonry'

// LIBS
import { useInView } from 'react-intersection-observer'

// COMPONENTS
import CreationCardMinimal from '@/components/Creation/CreationCardMinimal/CreationCardMinimal'
import Loader from '@/components/Loader/Loader'

// STYLES
import styled from 'styled-components'

const CreationsGridStyles = styled.section`
  width: 100vw;
  padding: 0 10px;
`

const PAGE_LENGTH = 10

export default function CreationsViewer({ creatorId }) {
  const [creations, setCreations] = useState<object[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [paginate, setPaginate] = useState(true)
  const [cutoffTime, setCutoffTime] = useState<number | null>(null)
  const [breakpointCols] = useState(5) // setBreakpointCols

  const getMoreCreations = useCallback(async () => {
    if (!paginate) return

    setLoading(true)

    try {
      const response = await axios.post('/api/creations', {
        creatorId: '63dc45b15fe0afaf616c8436',
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
      setMessage(`Error: ${error}`)
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
    <CreationsGridStyles id="creations-grid">
      <div style={{ width: '100%', minHeight: 393, marginTop: 200 }}>
        <Masonry
          id="masonry"
          columns={breakpointCols}
          spacing={2}
          sx={{ m: 0, alignContent: 'center' }}
        >
          {creations.map((creation, index) => (
            <CreationCardMinimal key={index} creation={creation} />
          ))}
        </Masonry>
      </div>
      {loading && <Loader />}
      {message && { message }}
      <div ref={ref}></div>
      {/* <Button onClick={getMoreCreations}>Load More</Button> */}
    </CreationsGridStyles>
  )
}
