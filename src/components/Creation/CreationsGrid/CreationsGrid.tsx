'use client'

import React, { useState, useEffect, useCallback, useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

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

// TYPES
import Creation from '@/interfaces/Creation'

// CONSTS
import { PAGE_LENGTH } from '@/consts/pageLength'
import { breakpointColumnsObj } from '@/consts/breakpointColumns'

export default function CreationsGrid({ username = null }) {
  const [creations, setCreations] = useState<object[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [paginate, setPaginate] = useState(true)
  const [cutoffTime, setCutoffTime] = useState<number | null>(null)

  const context = useContext(AppContext)
  const { authToken, setAuthToken, setUserId, setIsWeb3AuthSuccess } = context

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

      const { data } = response
      const { session } = data
      const { userId, token } = session
      const { token: respToken } = token

      console.log('Creations Grid: ', { authToken, token })

      if (respToken !== authToken && respToken.length === 175) {
        setAuthToken(token.token)
        setUserId(userId)
        setIsWeb3AuthSuccess(true)
      }

      const moreCreations =
        response.data.creations &&
        response.data.creations.map((creation: Creation) => {
          const { _id, user, uri, createdAt, task } = creation
          const { config, status, generator } = task
          const { text_input, width, height } = config
          const { generatorName } = generator

          return {
            key: _id,
            address: user,
            uri: uri,
            timestamp: createdAt,
            prompt: text_input,
            status: status,
            generator: generatorName,
            width: width,
            height: height,
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
              {creations.map((creation, i: number) =>
                creation.generator === 'tts' ||
                creation.generator === 'complete' ? null : (
                  <CreationCard creation={creation} key={i} />
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
