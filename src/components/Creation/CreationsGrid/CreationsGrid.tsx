'use client'

import React from 'react'
import { useState, useEffect, useCallback } from 'react'

// FETCH
import axios from 'axios'

// COMPONENTS
import { useInView } from 'react-intersection-observer'
import Masonry from 'react-masonry-css'

// EDEN COMPONENTS
import CreationCard from '@/components/Creation/CreationCard/CreationCard'
import Loader from '@/components/Loader/Loader'

// STYLES
import { CreationsGridStyles } from './CreationsGridStyles'

// CONSTS
const PAGE_LENGTH = 10

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
      <div className="creations-grid-wrapper">
        {creations.length < 1 ? (
          <Loader />
        ) : (
          <div className="masonry-wrapper">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={'cr-grid-masonry'}
              columnClassName="cr-grid-masonry_column"
            >
              {creations.map((creation, index) =>
                creation.generator === 'tts' ||
                creation.generator === 'complete' ? null : (
                  <CreationCard key={index} creation={creation} />
                ),
              )}
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
