import type { ReactElement } from 'react'
import { useEffect, useState, useCallback } from 'react'

// WAGMI
import { useAccount } from 'wagmi'

// NEXT
import Head from 'next/head'

// LAYOUT
import BaseLayout from 'src/layouts/BaseLayout'

// ANTD
import { Typography, Avatar } from 'antd'
const { Text } = Typography

// UTILS
import time_ago from '@/util/time_ago'

// COMPONENTS
import Stories from 'react-insta-stories'

// EDEN COMPONENTS
import Image from 'next/image'

// FETCH
import axios from 'axios'

// CONSTS
const serverUrl = process.env.EDEN_API_URL
const minioURL = process.env.MINIO_URL
const PRD_URL = `${minioURL}/creations-prd//`

// STYLES
import styled from 'styled-components'

const WatchStyles = styled.article`
  position: relative;
  box-shadow: unset !important;
  background: unset;
  background: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .stories-wrapper > div > div:nth-child(2) {
    overflow: unset !important;
  }
`

interface Story {
  url: string
  duration: number
  header: {
    heading: string
    subheading: string
    profileImage: string
  }
}

export default function WatchPage() {
  const [creations] = useState([])
  const [stories, setStories] = useState<Story[]>([])
  const [page] = useState(0)

  const { address } = useAccount()

  function randomColor() {
    const hex = Math.floor(Math.random() * 0xffffff)
    const color = '#' + hex.toString(16)

    return color
  }

  const getStories = useCallback(creations => {
    const newCreationsArray = []

    creations.map(creation => {
      // console.log(creation.text_input)
      // console.log('Turning into Story Object')

      const { text_input, source, sha, video_sha, intermediate_sha } = creation
      const creationType = video_sha ? 'video' : 'image'
      // console.log({ creationType })
      // console.log(PRD_URL + sha)

      // get age of creation
      const date = new Date(creation.date)
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      // date.toString(),
      const creation_time_ago = time_ago(creation.date)

      const newCreation = {
        url: PRD_URL + sha,
        duration: 8000,
        header: {
          heading: source.author_name,
          subheading: date,
          profileImage: 'https://picsum.photos/100/100',
        },
        content: () => (
          <div
            style={{
              background: 'white',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                zIndex: '100',
                left: '-200px',
                display: 'flex',
                width: 200,
                paddingRight: 2,
                justifyContent: 'flex-end',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <div style={{ marginBottom: 10 }}>
                <Avatar style={{ background: randomColor() }} />
              </div>
              <Text style={{ color: 'black', fontWeight: 600 }}>
                {source.author_name}
              </Text>
              <Text style={{ color: 'black' }}>{creation_time_ago}</Text>
            </div>
            {creationType === 'image' ? (
              <Image
                src={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
                alt="Eden Creation"
                layout="fill"
              />
            ) : (
              <video
                style={{ width: '100%', height: '100%' }}
                preload="auto"
                autoPlay
                poster={`${PRD_URL}${intermediate_sha[0]}`}
                // onPlay={() => setIsPlaying(true)}
                loop={true}
                muted={true}
                // ref={videoRef}
              >
                <source src={`${PRD_URL}${video_sha}.mp4`} type="video/mp4" />
              </video>
            )}

            <div
              className="creation-content"
              style={{
                position: 'absolute',
                zIndex: 10,
                bottom: '-100px',
                display: 'flex',
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                p: 0,
                m: 0,
              }}
            >
              <div
                style={{
                  borderRadius: '15px',
                  m: 0,
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ overflowY: 'auto', maxHeight: 150 }}>
                  <Text style={{ fontWeight: 'bold' }} color="text.primary">
                    {'/create'}
                  </Text>
                  <Text
                    variant="h3"
                    color="text.secondary"
                    style={{ p: 2, color: 'white' }}
                  >
                    {text_input}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        ),
        seeMore: ({ close }) => {
          return <div onClick={close}>Hello, click to close this.</div>
        },
      }

      newCreationsArray.push(newCreation)
    })

    return newCreationsArray
  }, [])

  useEffect(() => {
    setStories(getStories(creations))
  }, [creations, getStories, page, creations.length, stories.length])

  // fetchContext
  const getCreations = useCallback(
    (newPage, pageUpdateType, context) => {
      // console.log('|| --------------- Get Creations! ------------------- ||')
      let gatewayError = false
      let gatewayErrorMessage = ''

      const fetch_type = {
        sort_by: 'newest',
        skip: newPage > 0 ? 16 * newPage : 0,
        limit: 16,
        creations_address: address, // filter on the address, only see creations done by this address
        my_address: address,
        filter_on_my_address: true,
      }

      axios
        .post(serverUrl + '/get_creations', fetch_type)
        .then(response => {
          // DEBUG
          // console.log({ response })
          // console.log(creations.length)

          if (page === 0 && context === 'onAllStoriesEnd') {
            context.replaceCreations(response.data)
            context.incrementPageCreation(page)
          } else if (page > 0 && context === 'onAllStoriesEnd') {
            context.replaceCreations(response.data)
            context.incrementPageCreation(page)
          } else if (
            page === 0 &&
            pageUpdateType === 'replace' &&
            creations.length < 16
          ) {
            context.replaceCreations(response.data)
            context.incrementPageCreation(page)
          }
        })
        .catch(error => {
          console.error(error)
          gatewayError = true
          gatewayErrorMessage = error
        })

      if (gatewayError) {
        console.error('error', {
          message: 'Failed to contact gateway!',
          description: `${gatewayErrorMessage}`,
        })
      }
    },
    [address, creations.length, page],
  )

  function updateStories(newPage) {
    getCreations(newPage + 1, 'replace', 'onAllStoriesEnd')
  }

  if (creations.length === 0 && page === 0) {
    getCreations(0, 'replace', 'render')
  }

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <section maxWidth="xl">
        <WatchStyles>
          <div
            className="stories-wrapper"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {stories.length > 0 ? (
              <Stories
                stories={stories}
                loop={true}
                defaultInterval={8000}
                width={700}
                height={700}
                keyboardNavigation={true}
                onAllStoriesEnd={() => updateStories(page)}
              />
            ) : null}
          </div>
        </WatchStyles>
      </section>
    </>
  )
}

WatchPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
