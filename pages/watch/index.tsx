import type { ReactElement } from 'react'
// useMemo,
import React, { useEffect, useState, useCallback } from 'react'

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { batch } from 'react-redux'

// WAGMI
import { useAccount } from 'wagmi'

// REDUX
import {
  incrementPageCreation,
  // addCreations,
  // setPageUpdate,
  replaceCreations,
  // setLatestCreation,
  // setIsCreationRunningTrue,
  // setIsCreationRunningFalse,
} from '../../src/redux/slices/creationsSlice'
// import { setSort } from '../../src/redux/slices/sortSlice'
// import { setFilter } from '../../src/redux/slices/filterSlice'

// COLORS
// import { red } from '@mui/material/colors'

// GQL
// import { useQuery } from '@apollo/client'
// import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'
// import { useRouter } from 'next/router'

// import slug from 'slug';

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// MUI
import {
  Box,
  Container,
  styled,
  Typography,
  // CardContent,
  Avatar,
} from '@mui/material'

// UTILS
import time_ago from '@/util/time_ago'

// COMPONENTS
import Stories from 'react-insta-stories'

// COMPONENTS
// import {
//   Loading,
//   Creation,
//   VideoCreation,
//   CreationOG,
// } from '../components/abraham'
import Image from 'next/image'
// import DelayingAppearance from '@/components/Loading'
// import CreationCardVideo from '@/components/CreationCardVideo'

// HTTP
import axios from 'axios'

// const ipfsAPI = require('ipfs-http-client')
const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'
// const STG_URL = 'https://minio.aws.abraham.fun/creations-stg/'

// const refreshMinInterval = 1000
// const refreshMaxInterval = 10000

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// type SeeMoreFunction = () => void

interface Story {
  url: string
  duration: number
  header: {
    heading: string
    subheading: string
    profileImage: string
  }
  // seeMore: (string)<SeeMoreFunction>
}

// type StoriesType = Story[]

// CSS
// margin-right: -${theme.spacing(1)};
// const StoryStyles = styled('article')(
//   () => `
//     position: relative;
//     box-shadow: unset !important;
//     background: unset;
//     background: white;
//     width: 100%;
//     height: 100%;
//     #creation-card:hover {
//       transform: unset;
//       cursor: zoom-in;
//     }
//     .creation-content {
//       // position: absolute;
//       width: 100%;
//       bottom: -100px;
//       border-radius: 15px;
//       margin: 0;
//       padding: 0;
//       display: flex;
//       justify-content: center;
//     }
//     .creation-header {
//       display: inline-block;
//       margin: 8px;
//       padding: 8px;
//     }
//     .creation-header > div {
//       flex: 0;
//       float: left;
//     }
//     .creation-header:hover {
//       background: rgba(255, 255, 255, 0.1);
//       color: white;
//       border-radius: 25px;
//       margin: 8px;
//       padding: 8px;
//       cursor: pointer;
//       // backdrop-filter: blur(16px);
//     }
//   `,
// )

const WatchStyles = styled('article')(
  () => `
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
  `,
)

export default function WatchPage() {
  // const { url } = useRouteMatch()
  // const location = useLocation()
  // const { sort_url, filter_url } = useParams()
  // const [myRefreshInterval, setMyRefreshInterval] = useState(refreshMinInterval)
  // const [currentLastCreationID, setCurrentLastCreationID] = useState<string>('')
  const [stories, setStories] = useState<Story[]>([])
  // const [creationsArray, setCreationsArray] = useState<Story[]>([
  //   {
  //     url:
  //       PRD_URL +
  //       'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     duration: 8000,
  //     header: {
  //       heading: 'Test Input',
  //       subheading: 'Posted 30m ago',
  //       profileImage: 'https://picsum.photos/100/100',
  //     },
  //   },
  //   {
  //     url:
  //       PRD_URL +
  //       'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     duration: 8000,
  //     header: {
  //       heading: 'Test Input',
  //       subheading: 'Posted 30m ago',
  //       profileImage: 'https://picsum.photos/100/100',
  //     },
  //   },
  //   {
  //     url:
  //       PRD_URL +
  //       'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     duration: 8000,
  //     header: {
  //       heading: 'Test Input',
  //       subheading: 'Posted 30m ago',
  //       profileImage: 'https://picsum.photos/100/100',
  //     },
  //   },
  //   {
  //     url:
  //       PRD_URL +
  //       'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     duration: 8000,
  //     header: {
  //       heading: 'Test Input',
  //       subheading: 'Posted 30m ago',
  //       profileImage: 'https://picsum.photos/100/100',
  //     },
  //   },
  //   {
  //     url:
  //       PRD_URL +
  //       'e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     duration: 8000,
  //     header: {
  //       heading: 'Test Input',
  //       subheading: 'Posted 30m ago',
  //       profileImage: 'https://picsum.photos/100/100',
  //     },
  //   },
  // ])

  // const localToken = localStorage.getItem('token')

  // const router = useRouter()
  const { address } = useAccount()

  // const { slug } = router.query
  // console.log(slug)

  // redux utils and data
  const dispatch = useAppDispatch()
  // pageUpdate,  isCreationRunning
  const { page, creations } = useAppSelector(state => state.creations)
  // isWeb3AuthSuccess, isWeb3AuthSigning
  // const { isWeb3WalletConnected } = useAppSelector(state => state.auth)

  // console.log({ creations })
  // const token = useAppSelector(state => state.token.value)
  // const sort_by = useAppSelector(state => state.sort.value)
  // const filter_by = useAppSelector(state => state.filter.value)

  // address, myRefreshInterval, creations

  // const [breakpointCols, setBreakpointCols] = useState(3)
  // const { loading, error, data, fetchMore } = useQuery(GQL_GET_CREATIONS, {
  //   variables: {
  //     offset: 0,
  //     limit: 16,
  //   },
  // })

  // useEffect(() => {
  //   // console.log({ sort_url });
  //   // console.log({ filter_url });

  //   if (sort_url !== sort_by && filter_url !== filter_by) {
  //     console.log('Update setSort setFilter')
  //     batch(() => {
  //       dispatch(setSort(sort_url))
  //       dispatch(setFilter(filter_url))
  //     })
  //   } else if (sort_url !== sort_by) {
  //     console.log('Update setSort')
  //     dispatch(setSort(sort_url))
  //   } else if (filter_url !== filter_by) {
  //     console.log('Update setFilter')
  //     dispatch(setFilter(filter_url))
  //   }

  //   console.log(`%c CREATIONS USE-EFFECT`, 'background: #222; color: #fc0ce8')
  //   console.log({
  //     userSigner,
  //     address,
  //     isWeb3AuthSuccess,
  //     isWeb3WalletConnected,
  //     isWeb3AuthSigning,
  //   })
  //   console.log({ page })
  //   if (creations.length <= 16) {
  //     getCreations(0, 'replace', 'userSigner undefined') // useCallback
  //   } else if (typeof userSigner === 'undefined' && address === '') {
  //     // && address && token
  //     getCreations(0, 'replace', 'userSigner undefined') // useCallback
  //   } else if (userSigner && address) {
  //     getCreations(0, 'replace', 'userSigner && address')
  //   }
  // }, [
  //   page,
  //   sort_by,
  //   filter_by,
  //   sort_url,
  //   filter_url,
  //   address,
  //   userSigner,
  //   isWeb3WalletConnected,
  // ])

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
          // <StoryStyles>
          <Box
            sx={{
              background: 'white',
              position: 'relative',
              // padding: 2,
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                zIndex: '100',
                left: '-200px',
                display: 'flex',
                width: 200,
                pr: 2,
                // backgroundColor: 'red',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Box sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: randomColor() }} aria-label="recipe" />
              </Box>
              <Typography sx={{ color: 'black', fontWeight: 600 }}>
                {source.author_name}
              </Typography>
              <Typography sx={{ color: 'black' }}>
                {creation_time_ago}
              </Typography>
            </Box>
            {creationType === 'image' ? (
              <Image
                src={PRD_URL + intermediate_sha[intermediate_sha.length - 1]}
                // height={768}
                // width={768}
                alt="Eden Creation"
                // layout="responsive"
                layout="fill"
                // style={{
                //   position: 'relative',
                //   maxWidth: '100%',
                //   height: 'auto',
                // }}
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

            <Box
              className="creation-content"
              sx={{
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
              <Box
                sx={{
                  borderRadius: '15px',
                  m: 0,
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <Box sx={{ overflowY: 'auto', maxHeight: 150 }}>
                  <Typography sx={{ fontWeight: 'bold' }} color="text.primary">
                    {'/create'}
                  </Typography>
                  <Typography
                    variant="h3"
                    color="text.secondary"
                    sx={{ p: 2, color: 'white' }}
                  >
                    {text_input}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          // </StoryStyles>
        ),
        seeMore: ({ close }) => {
          return <div onClick={close}>Hello, click to close this.</div>
        },
      }

      newCreationsArray.push(newCreation)
    })

    // console.log('NEW CREATIONS ARRAY!')
    // console.log(newCreationsArray)

    return newCreationsArray
  }, [])

  // SYNC REDUX CREATIONS WITH LOCAL STORIES
  useEffect(() => {
    // console.log({ creations })
    // console.log({ page })
    // console.log(`STORIES-LENGTH: ${stories.length}`)

    setStories(getStories(creations))

    // if (page <= 1 && stories.length === 0) {
    //   console.log('STORIES-LENGTH === 0')
    //   setStories(newStories)
    // } else if (page > 1 && stories.length === 16) {
    //   setStories(newStories)
    // }
  }, [creations, getStories, page, creations.length, stories.length])

  // fetchContext
  const getCreations = useCallback(
    (newPage, pageUpdateType, context) => {
      // console.log('|| --------------- Get Creations! ------------------- ||')
      let gatewayError = false
      let gatewayErrorMessage = ''

      // DEBUG
      // console.log(`%c GET_CREATIONS`, 'background: #222; color: #fc0ce8')
      // console.log({
      //   userSigner,
      //   address,
      //   isWeb3AuthSuccess,
      //   isWeb3WalletConnected,
      // })
      // console.log({ url });
      // console.log({ location });
      // console.log({ sort_by });
      // console.log({ filter_by });

      const filter_on_my_address = false
      // if (filter_by === 'all') {
      //   filter_on_my_address = false
      // } else if (filter_by === 'my') {
      //   filter_on_my_address = true
      // }

      // const fetch_all_public = {
      //   sort_by: sort_by,
      //   skip: newPage > 0 ? 16 * newPage : 0,
      //   limit: 16,
      // }

      // const fetch_all = {
      //   sort_by: sort_by,
      //   skip: newPage > 0 ? 16 * newPage : 0,
      //   limit: 16,
      //   my_address: address,
      // }

      // const fetch_my = {
      //   sort_by: sort_by,
      //   skip: newPage > 0 ? 16 * newPage : 0,
      //   limit: 16,
      //   creations_address: address, // filter on the address, only see creations done by this address
      //   my_address: address,
      //   filter_on_my_address: filter_on_my_address,
      // }

      const fetch_type = {
        sort_by: 'newest',
        skip: newPage > 0 ? 16 * newPage : 0,
        limit: 16,
        creations_address: address, // filter on the address, only see creations done by this address
        my_address: address,
        filter_on_my_address: filter_on_my_address,
      }

      // let fetch_type = ''
      // if (filter_by === 'all' && isWeb3WalletConnected) {
      //   // isWeb3AuthSuccess
      //   console.log(`fetch_type: FETCH ALL`)
      //   fetch_type = fetch_all
      // } else if (
      //   filter_by === 'all' &&
      //   !isWeb3AuthSuccess &&
      //   !isWeb3WalletConnected
      // ) {
      //   console.log(`fetch_type: FETCH ALL PUBLIC`)
      //   fetch_type = fetch_all_public
      // } else if (filter_by === 'my' && address) {
      //   console.log(`fetch_type: FETCH MY`)
      //   fetch_type = fetch_my
      // }

      // console.log({ fetch_type })
      // console.log(pageUpdate)

      // my_address: address,
      axios
        .post(serverUrl + '/get_creations', fetch_type)
        .then(response => {
          // DEBUG
          // console.log({ response });
          // console.log({ pageUpdateType });
          // console.log({ pageUpdate });
          // console.log(creations.length);
          // console.log(creations.length === 16);
          // console.log({ isWeb3WalletConnected });
          // console.log(isWeb3WalletConnected === true);

          // if (creations.length <= 16 && newPage > 1 && pageUpdateType === 'add' && userSigner) {
          //   getCreations(newPage, 'add', 'userSigner');
          // } else

          // const newStories = getStories(response.data)
          // console.log({ newStories })
          // console.log({ page })
          // console.log({ pageUpdateType })
          // console.log(`CREATIONS-LENGTH: ${creations.length}`)
          // console.log({ isWeb3WalletConnected })
          // isWeb3WalletConnected === true

          // console.log(creations.length)
          if (page === 0 && context === 'onAllStoriesEnd') {
            batch(() => {
              dispatch(replaceCreations(response.data))
              dispatch(incrementPageCreation(page))
            })
          } else if (page > 0 && context === 'onAllStoriesEnd') {
            batch(() => {
              dispatch(replaceCreations(response.data))
              dispatch(incrementPageCreation(page))
            })
          } else if (
            page === 0 &&
            pageUpdateType === 'replace' &&
            creations.length < 16
          ) {
            // &&
            // creations.length === 0
            // console.log('Replace fetch creations')
            // console.log(response.data)

            batch(() => {
              dispatch(replaceCreations(response.data))
              dispatch(incrementPageCreation(page))
            })
          }

          // else if (
          //   page === 1 &&
          //   pageUpdateType === 'replace'
          //   ) {
          //   // &&
          //   // creations.length === 16
          //   dispatch(replaceCreations(response.data))
          //   dispatch(incrementPageCreation())
          // }

          // else if (page > 0 && pageUpdateType === 'replace') {
          //   // pageUpdateType === 'add'
          //   // pageUpdate === 'add' &&
          //   // console.log(`pageUpdate ADD: ${pageUpdate}`)

          //   batch(() => {
          //     dispatch(incrementPageCreation())
          //     dispatch(addCreations(response.data))
          //   })
          // } else if (pageUpdate === 'replace') {
          //   // console.log(`pageUpdate REPLACE: ${pageUpdate}`)
          //   // console.log(response.data)
          //   dispatch(replaceCreations(response.data))
          // }
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
    [
      address,
      creations.length,
      dispatch,
      // isWeb3WalletConnected,
      page,
      // pageUpdate,
      // getStories,
    ],
  )

  // const updateCreations = useCallback(
  //   () => (myRefreshInterval, creations) => {
  //     let gatewayError = false
  //     let gatewayErrorMessage = ''

  //     // .post(serverUrl + '/get_creations', {
  //     //   my_address: address,
  //     //   sort_by: sort_by,
  //     //   filter_by: filter_by,
  //     //   skip: 0,
  //     //   limit: 1,
  //     // })

  //     // add latest creation
  //     axios
  //       .post(serverUrl + '/get_creations', {
  //         status: 'running',
  //         skip: 0,
  //         limit: 10,
  //       })
  //       .then(response => {
  //         if (response.data.length > 0) {
  //           // console.log(
  //           //   `%c Update Latest Creations!`,
  //           //   'background: #d400ff; color: #fff700',
  //           // )
  //           // console.log({ response })

  //           const responseLatestCreationID = response.data[0]._id
  //           const responseLatestCreationStatusCode =
  //             response.data[0].status_code
  //           const responseLatestCreationStatus = response.data[0].status
  //           // console.log(
  //           //   `Last ResponseLatestCreationID: ${responseLatestCreationID}`,
  //           // )
  //           // console.log(
  //           //   `Last ResponseLatestCreation TextInput: ${response.data[0].text_input}`,
  //           // )

  //           let latestCreationID
  //           let latestCreationStatusCode
  //           if (creations.length !== 0) {
  //             latestCreationID = creations[0]._id
  //             latestCreationStatusCode = creations[0].status_code
  //             // console.log(`Last         LatestCreationID: ${latestCreationID}`)
  //             // console.log(
  //             //   `Last         LatestCreation TextInput: ${creations[0].text_input}`,
  //             // )
  //           }

  //           if (responseLatestCreationStatusCode === 'complete') {
  //             dispatch(setIsCreationRunningFalse())
  //           }

  //           if (
  //             latestCreationID !== responseLatestCreationID &&
  //             typeof latestCreationID !== 'undefined' &&
  //             typeof latestCreationStatusCode !== 'undefined'
  //             // typeof latestCreationStatusCode !== 'null'
  //           ) {
  //             // console.log('Dispatch Unshift SetLatestCreation')
  //             dispatch(
  //               setLatestCreation({ data: response.data[0], type: 'unshift' }),
  //             )
  //           } else if (
  //             latestCreationID === responseLatestCreationID &&
  //             responseLatestCreationStatus === 'running'
  //           ) {
  //             // console.log('Dispatch Replace SetLatestCreation')
  //             dispatch(
  //               setLatestCreation({ data: response.data[0], type: 'replace' }),
  //             )
  //           } else if (
  //             typeof responseLatestCreationStatusCode !== 'undefined' &&
  //             // typeof latestCreationStatusCode !== 'null' &&
  //             latestCreationID === responseLatestCreationID &&
  //             responseLatestCreationStatusCode > latestCreationStatusCode
  //           ) {
  //             // console.log('Dispatch Replace SetLatestCreation')
  //             dispatch(
  //               setLatestCreation({ data: response.data[0], type: 'replace' }),
  //             )
  //           }
  //         }
  //       })
  //       .catch(error => {
  //         // console.log(error)
  //         gatewayError = true
  //         gatewayErrorMessage = error
  //       })

  //     if (gatewayError) {
  //       console.error('error', {
  //         message: 'Failed to contact gateway!',
  //         description: `${gatewayErrorMessage}`,
  //       })
  //       setMyRefreshInterval(
  //         myRefreshInterval <= refreshMaxInterval
  //           ? myRefreshInterval + refreshMinInterval
  //           : refreshMaxInterval,
  //       )
  //     } else {
  //       setMyRefreshInterval(refreshMinInterval)
  //     }
  //   },
  //   [dispatch],
  // )

  function updateStories(newPage) {
    // console.log('UPDATE STORY ------------------------------------!!!')
    // console.log(`PAGE: ${newPage}`)
    // getCreations(newPage, 'add')
    // getCreations(newPage, 'replace')

    // console.log('All Stories End')
    // console.log({ page })
    // console.log({ newPage })

    // dispatch(incrementPageCreation())
    getCreations(newPage + 1, 'replace', 'onAllStoriesEnd')
  }

  // const { width } = useWindowDimensions()
  // console.log({ width })

  // const deviceWidthMobile = 640
  // const deviceWidthTablet = 840
  // const deviceWidthDesktop = 1150
  // const deviceWidthDesktopXL = 1300
  // const deviceWidthDesktopXXL = 1400

  // console.log({ width })

  // console.log(data)
  // console.log({ creationsArray })
  // console.log({ creations })
  // console.log({ stories })

  if (creations.length === 0 && page === 0) {
    getCreations(0, 'replace', 'render')
  }

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="xl">
        <WatchStyles>
          <Box
            className="stories-wrapper"
            sx={{
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
          </Box>
        </WatchStyles>
      </Container>
      {/* <Footer /> */}
    </>
  )
}

WatchPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
