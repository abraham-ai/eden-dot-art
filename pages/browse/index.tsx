import type { ReactElement } from 'react'
import React, { useEffect, useState, useCallback } from 'react'
//  useMemo,

// REDUX
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { batch } from 'react-redux'

// WAGMI
import { useAccount } from 'wagmi'

// REDUX
import {
  incrementPageCreation,
  addCreations,
  // setPageUpdate,
  replaceCreations,
  setLatestCreation,
  // setIsCreationRunningTrue,
  setIsCreationRunningFalse,
} from '../../src/redux/slices/creationsSlice'
// import { setSort } from '../../src/redux/slices/sortSlice'
// import { setFilter } from '../../src/redux/slices/filterSlice'

// GQL
// import { useQuery } from '@apollo/client'
import QueryResult from '@/components/QueryResult'

// NEXT
import Head from 'next/head'
// import { useRouter } from 'next/router'

// ROUTING
// import { Link, useRouteMatch, useLocation, useParams } from 'react-router-dom'
// import slug from 'slug';

// NAV
// import Footer from '@/components/Footer'
import BaseLayout from 'src/layouts/BaseLayout'

// UI
import { Box, Container, styled } from '@mui/material'

// COMPONENTS
import CreationCardMinimal from '@/components/CreationCardMinimal'
import Masonry from '@mui/lab/Masonry'

// COMPONENTS
// import {
//   Loading,
//   Creation,
//   VideoCreation,
//   CreationOG,
// } from '../components/abraham'
import InfiniteScroll from 'react-infinite-scroll-component'
import DelayingAppearance from '@/components/Loading'
import CreationCardVideo from '@/components/CreationCardVideo'

// HTTP
import axios from 'axios'

// const ipfsAPI = require('ipfs-http-client')
const serverUrl = process.env.NEXT_PUBLIC_ABRAHAM_GATEWAY
// const PRD_URL = 'https://minio.aws.abraham.fun/creations-prd//'

// const STG_URL = 'https://minio.aws.abraham.fun/creations-stg/'

const refreshMinInterval = 1000
const refreshMaxInterval = 10000

// CONSTS
// import { GET_CREATIONS } from '@/const/get-creations'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// GQL Creations query to retreive all Creations //
// import { GET_CREATIONS as GQL_GET_CREATIONS } from '@/graphql/queries'

// CSS
// margin-right: -${theme.spacing(1)};
const CreationsStyles = styled('div')(
  () => `
  padding: 0;
  @media (min-width: 20em) {
    /* grid-template-columns: repeat(1, 1fr); */
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 40em) {
    display: grid;
    // grid-gap: 36px !important;
    // grid-template-columns: repeat(2, 1fr); */
  }
  @media (min-width: 50em) {
  }
  @media (min-width: 60em) {
    /* grid-template-columns: repeat(3, 1fr); */
  }
  @media (min-width: 80em) {
    overflow-x: hidden;
    max-width: 2200px;
    .ant-col.ant-col-8 {
      overflow: hidden;
      min-height: 100%;
      display: flex;
      flex: 1;
      /* padding: 0 16px !important; */
      padding: 0 !important;
      max-width: unset !important;
    }
  }
`,
)

export default function CreationsPage() {
  // const { url } = useRouteMatch()
  // const location = useLocation()
  // const { sort_url, filter_url } = useParams()
  const [myRefreshInterval, setMyRefreshInterval] = useState(refreshMinInterval)
  // setBreakpointCols
  const [breakpointCols] = useState(3)

  // const localToken = localStorage.getItem('token')

  // const router = useRouter()
  const { address } = useAccount()

  // const { slug } = router.query
  // console.log(slug)

  // redux utils and data
  const dispatch = useAppDispatch()
  const { page, pageUpdate, creations, isCreationRunning } = useAppSelector(
    state => state.creations,
  )
  //  isWeb3AuthSuccess,  isWeb3AuthSigning
  const { isWeb3WalletConnected } = useAppSelector(state => state.auth)
  // const token = useAppSelector(state => state.token.value)
  // const sort_by = useAppSelector(state => state.sort.value)
  // const filter_by = useAppSelector(state => state.filter.value)
  // const [stories, setStories] = useState<Stories[]>([])

  // `${PRD_URL} ${intermediate_sha[intermediate_sha.length - 1]}`,
  // const stories = [
  //   {
  //     url: 'https://minio.aws.abraham.fun/creations-prd//e8edf53f87857ec774d61a4e72a697192413a7a6113025ecaf63dc9d32d69362',
  //     type: 'image',
  //     duration: 6000,
  //     header:
  //       'Portrait of a couple of dolphin in a whimsical land with a splashing waterfall, coloring book style, hyper-detailed painting, beautiful elegant digital illustration, scenic, gold outline, hyper-realistic, glowing stars, paisley pattern, fluorescent neon, glowwave, wide-angle lens',
  //     seeMore: address,
  //   },
  //   {
  //     content: props => (
  //       <div style={{ background: 'pink', padding: 20 }}>
  //         <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
  //         <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
  //       </div>
  //     ),
  //   },
  // ]

  // address, myRefreshInterval, creations

  // useEffect(() => {
  //   const tempStoriesArray = []
  //   let newStory

  //   GET_CREATIONS.map(creation => {
  //     const { text_input, address, intermediate_sha } = creation

  //     newStory = {
  //       url:
  //         creation.intermediate_sha === undefined
  //           ? 'none'
  //           : PRD_URL + intermediate_sha[intermediate_sha.length - 1],
  //       type: 'image',
  //       duration: 6000,
  //       header: text_input,
  //       seeMore: address,
  //     }
  //   })

  //   tempStoriesArray.push({
  //     content: props => (
  //       <div style={{ background: 'pink', padding: 20 }}>
  //         <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
  //         <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
  //       </div>
  //     ),
  //   })

  //   setStories(tempStoriesArray)
  // }, [])

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

  // fetchContext
  const getCreations = (newPage, pageUpdateType) => {
    // console.log('Get Creations!')
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

        if (
          page === 0 &&
          pageUpdateType === 'replace' &&
          creations.length === 16 &&
          isWeb3WalletConnected === true
        ) {
          // console.log('Replace fetch creations')
          // console.log(response.data)
          dispatch(incrementPageCreation(page))
          dispatch(replaceCreations(response.data))
        } else if (pageUpdateType === 'add') {
          // pageUpdate === 'add' &&
          // console.log(`pageUpdate ADD: ${pageUpdate}`)
          batch(() => {
            dispatch(incrementPageCreation(page))
            dispatch(addCreations(response.data))
          })
        } else if (pageUpdate === 'replace') {
          // console.log(`pageUpdate REPLACE: ${pageUpdate}`)
          // console.log(response.data)
          dispatch(replaceCreations(response.data))
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
  }

  const updateCreations = useCallback(
    () => (myRefreshInterval, creations) => {
      let gatewayError = false
      let gatewayErrorMessage = ''

      // .post(serverUrl + '/get_creations', {
      //   my_address: address,
      //   sort_by: sort_by,
      //   filter_by: filter_by,
      //   skip: 0,
      //   limit: 1,
      // })

      // add latest creation
      axios
        .post(serverUrl + '/get_creations', {
          status: 'running',
          skip: 0,
          limit: 10,
        })
        .then(response => {
          if (response.data.length > 0) {
            // console.log(
            //   `%c Update Latest Creations!`,
            //   'background: #d400ff; color: #fff700',
            // )
            // console.log({ response })

            const responseLatestCreationID = response.data[0]._id
            const responseLatestCreationStatusCode =
              response.data[0].status_code
            const responseLatestCreationStatus = response.data[0].status
            // console.log(
            //   `Last ResponseLatestCreationID: ${responseLatestCreationID}`,
            // )
            // console.log(
            //   `Last ResponseLatestCreation TextInput: ${response.data[0].text_input}`,
            // )

            let latestCreationID
            let latestCreationStatusCode
            if (creations.length !== 0) {
              latestCreationID = creations[0]._id
              latestCreationStatusCode = creations[0].status_code
              // console.log(`Last         LatestCreationID: ${latestCreationID}`)
              // console.log(
              //   `Last         LatestCreation TextInput: ${creations[0].text_input}`,
              // )
            }

            if (responseLatestCreationStatusCode === 'complete') {
              dispatch(setIsCreationRunningFalse())
            }

            if (
              latestCreationID !== responseLatestCreationID &&
              typeof latestCreationID !== 'undefined' &&
              typeof latestCreationStatusCode !== 'undefined'
              // typeof latestCreationStatusCode !== 'null'
            ) {
              // console.log('Dispatch Unshift SetLatestCreation')
              dispatch(
                setLatestCreation({ data: response.data[0], type: 'unshift' }),
              )
            } else if (
              latestCreationID === responseLatestCreationID &&
              responseLatestCreationStatus === 'running'
            ) {
              // console.log('Dispatch Replace SetLatestCreation')
              dispatch(
                setLatestCreation({ data: response.data[0], type: 'replace' }),
              )
            } else if (
              typeof responseLatestCreationStatusCode !== 'undefined' &&
              // typeof latestCreationStatusCode !== 'null' &&
              latestCreationID === responseLatestCreationID &&
              responseLatestCreationStatusCode > latestCreationStatusCode
            ) {
              // console.log('Dispatch Replace SetLatestCreation')
              dispatch(
                setLatestCreation({ data: response.data[0], type: 'replace' }),
              )
            }
          }
        })
        .catch(error => {
          // console.log(error)
          gatewayError = true
          gatewayErrorMessage = error
        })

      if (gatewayError) {
        console.error('error', {
          message: 'Failed to contact gateway!',
          description: `${gatewayErrorMessage}`,
        })
        setMyRefreshInterval(
          myRefreshInterval <= refreshMaxInterval
            ? myRefreshInterval + refreshMinInterval
            : refreshMaxInterval,
        )
      } else {
        setMyRefreshInterval(refreshMinInterval)
      }
    },
    [dispatch],
  )

  useEffect(() => {
    // console.log(`IS-CREATION-RUNNING: ${isCreationRunning}`)
    if (isCreationRunning) {
      const interval = setInterval(() => {
        updateCreations()
      }, myRefreshInterval)
      return () => clearInterval(interval)
    }
  }, [
    address,
    myRefreshInterval,
    isCreationRunning,
    creations,
    updateCreations,
  ])

  // const { width } = useWindowDimensions()

  // useEffect(() => {
  //   console.log({ data })
  // }, [data])

  function updateScroll(newPage) {
    // console.log('UPDATE SCROLL------------------------------------!!!')
    // console.log(`PAGE: ${newPage}`)
    dispatch(incrementPageCreation(page))
    getCreations(newPage, 'add')
  }

  const layout = 'masonry'

  // const deviceWidthMobile = 640
  // const deviceWidthTablet = 840
  // const deviceWidthDesktop = 1150
  // const deviceWidthDesktopXL = 1300
  // const deviceWidthDesktopXXL = 1400

  // const { width } = useWindowDimensions()
  // console.log({ width })

  // const getBreakpointCols = useMemo(() => {
  //   // console.log('USE-MEMO BREAKPOINTS!!!!')
  //   // console.log(width)
  //   // console.log(width <= 960)

  //   if (typeof window !== 'undefined') {
  //     if (width <= deviceWidthMobile) {
  //       // console.log('USE-MEMO BREAKPOINTS MOBILE!!!!')
  //       setBreakpointCols(1)
  //       return 1
  //     } else if (width >= deviceWidthMobile && width <= deviceWidthTablet) {
  //       // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //       setBreakpointCols(2)
  //       return 2
  //     } else if (width >= deviceWidthTablet && width <= deviceWidthDesktop) {
  //       // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //       setBreakpointCols(3)
  //       return 2
  //     } else if (width >= deviceWidthDesktop && width < deviceWidthDesktopXL) {
  //       // console.log('USE-MEMO BREAKPOINTS DESKTOP!!!!')
  //       setBreakpointCols(4)
  //       return 4
  //     } else if (
  //       width >= deviceWidthDesktopXL &&
  //       width < deviceWidthDesktopXXL
  //     ) {
  //       setBreakpointCols(4)
  //       return 6
  //     } else if (width >= deviceWidthDesktopXXL) {
  //       setBreakpointCols(4)
  //       return 7
  //     } else {
  //       // console.log('USE MEMO DEFAULT!!!')
  //     }
  //   }
  // }, [width])

  // console.log(breakpointCols)
  // console.log(getBreakpointCols)

  // const deviceWidthMobile = 640
  // const deviceWidthTablet = 840
  // const deviceWidthDesktop = 1150
  // const deviceWidthDesktopXL = 1300
  // const deviceWidthDesktopXXL = 1400

  // console.log({ width })

  // const getBreakpointCols =
  // useMemo(() => {
  // console.log('USE-MEMO BREAKPOINTS!!!!')
  // console.log(width)
  // console.log(width <= 960)

  //   if (width <= deviceWidthMobile) {
  //     // console.log('USE-MEMO BREAKPOINTS MOBILE!!!!')
  //     setBreakpointCols(1)
  //     return 1
  //   } else if (width >= deviceWidthMobile && width <= deviceWidthTablet) {
  //     // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //     setBreakpointCols(2)
  //     return 2
  //   } else if (width >= deviceWidthTablet && width <= deviceWidthDesktop) {
  //     // console.log('USE-MEMO BREAKPOINTS TABLET!!!!')
  //     setBreakpointCols(3)
  //     return 2
  //   } else if (width >= deviceWidthDesktop && width < deviceWidthDesktopXL) {
  //     // console.log('USE-MEMO BREAKPOINTS DESKTOP!!!!')
  //     setBreakpointCols(4)
  //     return 4
  //   } else if (width >= deviceWidthDesktopXL && width < deviceWidthDesktopXXL) {
  //     setBreakpointCols(4)
  //     return 6
  //   } else if (width >= deviceWidthDesktopXXL) {
  //     setBreakpointCols(4)
  //     return 7
  //   } else {
  //     console.log('USE MEMO DEFAULT!!!')
  //   }
  // }, [width])

  // console.log(breakpointCols)
  // console.log(getBreakpointCols)

  const onLoadMore = () =>
    fetchMore({
      variables: {
        offset: 10,
        limit: 10, //data.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          creationsForHome: [
            ...prev.creationsForHome,
            ...fetchMoreResult.creationsForHome,
          ],
        }
      },
    })

  // console.log(data)

  return (
    <>
      <Head>
        <title>Creations</title>
      </Head>
      <Container maxWidth="xl">
        {/* {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )} */}

        {/* breakpointCols */}
        <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
          <Masonry columns={4} spacing={2}>
            <QueryResult error={error} loading={loading} data={data}>
              {data?.creationsForHome?.map((creation, index) => (
                <CreationCardMinimal
                  key={`${creation.id}_${index}`}
                  creation={creation}
                />
              ))}
            </QueryResult>
          </Masonry>
          <a
            href="#"
            onClick={onLoadMore}
            style={{ color: 'black', paddingBottom: 10 }}
          >
            Load More
          </a>

          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stories
              stories={stories}
              defaultInterval={1500}
              width={432}
              height={768}
            />
          </Box> */}

          <InfiniteScroll
            dataLength={creations.length}
            next={() => updateScroll(page + 1)}
            hasMore={true}
            loader={<DelayingAppearance />}
          >
            <CreationsStyles id="creations">
              {layout === 'masonry' ? (
                <Masonry columns={breakpointCols} spacing={2}>
                  {creations.map((item, index) =>
                    item?.video_sha ? (
                      <CreationCardVideo
                        key={index}
                        item={item}
                        // onFilterChange={onFilterChange}
                      />
                    ) : (
                      <CreationCardMinimal
                        key={index}
                        creation={item}
                        // onFilterChange={onFilterChange}
                      />
                    ),
                  )}
                </Masonry>
              ) : (
                <>
                  {creations.map((item, index) => (
                    <CreationCardMinimal
                      key={index}
                      creation={item}
                      // onFilterChange={onFilterChange}
                    />
                  ))}
                </>
              )}
            </CreationsStyles>
          </InfiniteScroll>
        </Box>
      </Container>

      {/* <Container maxWidth="xl">
          {isConnected ? (
          <>
            <Typography variant={'h3'}>
              You are connected with you wallet!
            </Typography>
            <Typography variant={'body1'}>{address}</Typography>
          </>
        ) : (
          <Button variant={'contained'}>
            <p>Please connect your Wallet</p>
          </Button>
        )}

          <Box sx={{ width: '100%', minHeight: 393, mt: 20 }}>
            <Masonry columns={4} spacing={2}>
              {GET_CREATIONS.map((creation, index) => {
                const rand = Math.random()
                if (rand > 0.5) {
                  return <CreationCardMinimal key={index} creation={creation} />
                } else {
                  return <CreationCardMinimal key={index} creation={creation} />
                  // return <CreationCardMedia key={index} creation={creation} />;
                }
              })}
            </Masonry>
          </Box>
        </Container> */}
      {/* <Footer /> */}
    </>
  )
}

// CreationsPage.getLayout = page => (
//   <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
// )

// export default CreationsPage

CreationsPage.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}
